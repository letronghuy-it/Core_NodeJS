const ProductModel = require('../models/Product.model')
const multer = require('multer')
const path = require('path')
const validateProduct = require('../validation/ProductValidation')
const updateProductvalidation = require('../validation/UpdateProductvalidation')
const { uuid } = require('uuidv4');


//Thiết Lập sử lý ảnh 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/products')
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname));
    },
})


const uploadfileProduct = multer({ storage }).array('image_product', 3);

const loadData = async (req, res) => {
    const allProduct = await ProductModel.loadData()
    res.status(200).json(allProduct);
}
const getBill = async (req, res) => {
    const getBill = await ProductModel.getBill()
    res.status(200).json(getBill)
}

const DataMyProduct = async (req, res) => {
    const id = parseInt(req.params.id);
    const myproduct = await ProductModel.myproduct(id)
    if (myproduct) {
        res.status(200).json(myproduct)
    } else {
        return res.status(500).json({ message: 'Không tồn tại Member!' })
    }

}
// ADD-PRODUCT
const createProduct = async (req, res) => {
    try {
        const { body: data } = req;
        data.id_user = parseInt(data.id_user);
        data.price = parseFloat(data.price);
        data.id_category = parseInt(data.id_category);
        data.id_brand = parseInt(data.id_brand);
        data.sale = parseInt(data.sale);
        data.status = parseInt(data.status);
        // rút gọn code
        // const { body: data, files: image_product } = req;
        // ['id_user', 'price', 'id_category', 'id_brand', 'sale', 'status'].forEach(key => {
        //     data[key] = parseFloat(data[key];)
        // });
        const image_product = req.files;
        if (image_product) {
            image_product.forEach(file => {
                file.originalname = Buffer.from(file.originalname, 'binary').toString('utf8')
            })
        }

        const errors = validateProduct(data, image_product)
        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors)
        }

        const errorsProduct = await ProductModel.checkProduct(data.slug)
        if (Object.keys(errorsProduct).length > 0) {
            return res.status(400).json(errorsProduct);
        }

        data.image_product = image_product ? image_product.map(file => file.path.split('public')[1]) : [];
        data.image_product = JSON.stringify(data.image_product)

        const product = await ProductModel.createProduct(data)
        if (!product) {
            res.status(500).json({ message: 'Thêm mới thất bại' });
        } else {
            res.status(200).json(product)
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }

}
//EDIT-PRODUCT
const editProduct = async (req, res) => {
    const id = parseInt(req.params.id);
    const product = await ProductModel.editProduct(id)
    if (!product) {
        res.status(500).json({ message: 'Không tìm thấy sản phẩm ' });
    } else {
        res.status(200).json({ message: 'Thành công', product });
    }
}
//UPDATE - PRODUCT
const updateProduct = async (req, res) => {
    try {
        const data = req.body;
        //file
        data.id_user = parseInt(data.id_user);
        data.price = parseFloat(data.price);
        data.id_category = parseInt(data.id_category);
        data.id_brand = parseInt(data.id_brand);
        data.sale = parseInt(data.sale);
        data.status = parseInt(data.status);
        const image_product = req.files;
        // //id
        const id = parseInt(data.id);

        if (image_product) {
            image_product.forEach(file => {
                file.originalname = Buffer.from(file.originalname, 'binary').toString('utf8');
            });
        }
        // request Update
        const errors = updateProductvalidation(data, image_product);
        if (Object.keys(errors).length > 0) {
            return res.status(400).json(errors);
        }

        //get ảnh  và chuyển ảnh qua json bới vì ảnh hiện tại là chuỗi 
        var getImage = await ProductModel.getImage(id)
        let keysToRemove = data.image_product_check;
        if (keysToRemove) {
            getImage = getImage.filter(item => !keysToRemove.includes(item));
        }

        if (image_product && image_product.length > 0) {
            let newImages = image_product.map(file => file.path.split('public')[1]);
            data.image_product = [...getImage, ...newImages];
        } else {
            data.image_product = getImage || '';
        }

        if (data.image_product.length !== 3) {
            return res.status(400).json({ message: 'Bạn phải thêm số ảnh tương ứng số ảnh bạn đã xoá ' });
        } else {
            data.image_product = JSON.stringify(data.image_product)
            const product = await ProductModel.updateProduct(id, data);

            if (!product) {
                res.status(400).json({ message: 'product không tồn tại' })
            } else {
                //Phải trả về 2 thứ để update data hiện tại có trong mảng đồng thời update ngay dataEdit
                const Products = await ProductModel.editProduct(id);
                const allProducts = await ProductModel.myproduct(data.id_user);
                // Return both Products and allProducts
                res.status(200).json({ product, Products, allProducts });
            }
        }

    } catch (error) {
        console.error(error);
    }
}
// delete 
const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = await ProductModel.destroy(id)
        if (!product) {
            res.status(400).json({ message: 'product không tồn tại' })
        } else {
            res.status(200).json({ message: 'Xoá thành công product', product })

        }
    } catch (error) {
        res.status(500).json({ message: error });
    }

}
const productinCart = async (req, res) => {
    try {
        const data = req.body;
        //dùng for để duyệt toàn bộ id của product
        let products = [];
        for (let key in data) {
            let id = key;
            let qtyfe = data[key];
            const id_product = parseInt(id);
            const qty = parseInt(qtyfe);
            if (id_product) {
                const product = await ProductModel.findProductById(id_product, qty);
                if (product) {
                    products.push(product)
                }
            }

        }

        // Nếu không tìm thấy sản phẩm, gửi phản hồi lỗi
        if (products.length === 0) {
            res.status(400).json({ message: 'Lỗi Hệ thống!' });
        } else {
            res.status(200).json(products);
        }
    } catch (error) {
        res.status(500).json({ message: 'Không Tìm Thấy Sản Phẩm' });
    }


}
// load 6 product 
const loadData6 = async (req, res) => {
    const product6 = await ProductModel.loadData6()
    res.status(200).json(product6);
}

const Checkout = async (req, res) => {
    const data = req.body;
    const id_user = parseInt(data.id_user);
    const total = parseInt(data.total)
    const codeVisitor = uuid(); // Tạo mã duy nhất
    const cart = data.cart

    data.codeVisitor = codeVisitor; // chỗ này submit hai lần bị lỗi vì email còn là unique chỉ cần sửa là song
    // Tạo khách hàng mới và lấy ID
    const getidcustomer = await ProductModel.Newcustomer(data);
    if (getidcustomer) {
        const bill = {
            codeBill: uuid(),
            total: total,
            id_Visitor: getidcustomer,
            id_user: id_user,
        }
        const Oder = await ProductModel.newBill(bill)
        let products = [];
        for (let key in cart) {
            let id = key;
            let qtyfe = cart[key];
            const id_product = parseInt(id);
            const qty = parseInt(qtyfe);
            const product = await ProductModel.findProductById(id_product, qty);
            //thêm tất cả product tim được vào product
            if (product) {
                products.push(product)
            }
            const zzz = {
                id_bill: Oder,
                id_product: id_product,
                qty
            }
            const ctoder = ProductModel.newCt(zzz);
        }
        res.status(200).json({ message: 'Thanh Toán Thành Công!' })
    }
}


module.exports = {
    loadData,
    DataMyProduct,
    createProduct, uploadfileProduct,
    editProduct,
    updateProduct,
    destroy,
    productinCart,
    loadData6,
    Checkout,
    getBill
}