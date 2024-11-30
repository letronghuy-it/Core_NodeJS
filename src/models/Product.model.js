const { PrismaClient } = require("../generated/client");

const prisma = new PrismaClient()

const loadData = async () => {
    return prisma.product.findMany();
}

const getBill = async () => {
    return prisma.bill.findMany({
        include: {
            visitor: true,
            user: true,
        },
    });
};
//Load-6-product 
const loadData6 = async () => {
    return prisma.product.findMany({
        take: 6,
        orderBy: {
            createdAt: 'desc'
        }
    })
}
const destroy = async (id) => {
    // tim x xem product có tồn tại không 
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
        throw new Error('Product not found');
    }
    // nếu có product rồi xoá luôn 
    await prisma.product.delete({ where: { id } });

    //trả về all pro Prouct

    const allProducts = await myproduct(product.id_user);


    return allProducts;
}

const myproduct = async (id) => {
    try {

        const productData = await prisma.product.findMany({
            where: {
                id_user: id,
            },
            include: {
                user: true,
                brand: true,
                category: true
            },
        });

        return productData;
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
};

const createProduct = async (data) => {
    // Create new product
    const newProduct = await prisma.product.create({ data });


    if (newProduct) {
        // Fetch all products of the user
        const allProducts = await myproduct(data.id_user);

        // Return all products
        return allProducts;
    } else {
        // Handle error or return appropriate message
        throw new Error('Failed to create product');
    }
}
const editProduct = async (id) => {
    try {
        const productData = await prisma.product.findUnique({
            where: {
                id: id,
            },
            include: {
                user: true,
                brand: true,
                category: true
            },
        });

        return productData;
    } catch (error) {
        console.error('Error fetching product data:', error);
        throw error;
    }
}
const checkProduct = async (slug) => {
    const existingProduct = await prisma.product.findFirst({
        where: { slug },
    });

    const errors = {};

    if (existingProduct) {
        errors.message = 'Sản phẩm đã tồn tại trong hệ thống';
    }
    return errors;
}

// getImage exits product 
const getImage = async (id) => {
    try {
        const product = await prisma.product.findUnique({
            where: { id: id }
        })
        if (!product) {
            throw new Error(`product with id ${id} not found`);
        }
        //Phải chuyển thành mảng để qua bên kia lấy ra là cái mảng chú không phải cái chuỗi 
        return JSON.parse(product.image_product);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const updateProduct = async (id, data) => {
    delete data.id;
    delete data.image_product_check
    // Update product
    const newProduct = await prisma.product.update({ where: { id }, data });

    // If product is updated successfully
    if (newProduct) {
        // Fetch all products of the user
        const product = await editProduct(id);
        const allProducts = await myproduct(data.id_user);
        // Return both Products and allProducts
        return { product, allProducts };
    } else {
        // Handle error or return appropriate message
        throw new Error('Cập nhật Thất bại ');
    }
}
// search product by id
const findProductById = async (id, qty) => {
    try {
        const existingProduct = await prisma.product.findUnique({
            where: { id: id },
        });
        if (!existingProduct) {
            throw new Error('KHông tìm thấy sản phẩm ');
        }
        //Truyền Tham số qty vào product
        existingProduct.qty = qty;
        return existingProduct;
    } catch (error) {
        console.error(`Lỗi trong findProductById: ${error.message}`);
        throw error;
    }
};

// New customer and get ID 
const Newcustomer = async (data) => {
    delete data.id_user;
    delete data.total;
    delete data.cart;
    const newCustomer = await prisma.visitor.create({ data });
    return newCustomer.id; // Trả về id của khách hàng mới
}
//Create New Bill
const newBill = async (data) => {
    delete data.cart;
    const newBill = await prisma.bill.create({ data });
    return newBill.id

}
const newCt = async (data) => {
    return prisma.invoicedetails.create({ data });
}
module.exports = {
    loadData,
    myproduct,
    createProduct,
    editProduct,
    checkProduct,
    getImage,
    updateProduct,
    destroy,
    findProductById,
    loadData6,
    Newcustomer,
    newBill,
    newCt,getBill
}