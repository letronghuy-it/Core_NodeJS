const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const userController = require('../controllers/userController');
const Blogcontroller = require('../controllers/Blogcontroller');
const CategoryController = require('../controllers/Categorycontroller');
const BrandController = require('../controllers/Brandcontroller');
const ProductController = require('../controllers/Productcontroller');
///tonken User
function requireAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Không có tiêu đề ủy quyền' });
    }
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Không được ủy quyền1' });
    }

    try {
        const decoded = jwt.verify(token, 'huy-vic');
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Lỗi trong quá trình xác minh token:', error);
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ error: 'Token đã hết hạn' });
        } else {
            return res.status(401).json({ error: 'Không được ủy quyền2' });
        }
    }
}





//USER MEMBER /// ------------------------------------------------
router.get('/user', userController.loadaUser);
// // Định nghĩa API
// router.get('/user', requireAuth, userController.loadaUser);
// Tạo 1 người dùng mới // Có thể dùng để register luôn

router.post('/user/create', userController.upload, userController.createUser);
// Lấy user 1 người dùng 
router.get('/user/edit/:id', userController.edituser);
//Xoá Người dùng
router.delete('/user/delete/:id', userController.deleteuser);
// Update người dùng 
router.put('/user/update', userController.upload, userController.updateuser);
// user
//=>Login 
router.post('/user/login', userController.Login);


// Blog //////////////////////////////////////////////////////////// BLOG 
router.get('/blog', Blogcontroller.loadBlog);
router.post('/blog/create', Blogcontroller.upload, Blogcontroller.CreateBlog);
//Có thể dùng được cho detail
router.get('/blog/edit/:id', Blogcontroller.editBlog);
router.put('/blog/update', Blogcontroller.upload, Blogcontroller.updateBlog)
router.delete('/blog/delete/:id', Blogcontroller.deleteBlog);

// Comment Blog
router.post('/blog/comment',requireAuth, Blogcontroller.uploadcomment, Blogcontroller.Blogcomment);
//rate Blog
router.post('/blog/rate/:id',requireAuth, Blogcontroller.rateBlog);
router.get('/rate/:id', Blogcontroller.datarateblog);

//Quên Mật Khẩu 
router.post('/action-losstpassword', userController.Sendpassword);
//  Quên song cập nhật lại mật khẩu 
router.post('/update/password', userController.updatePassword)

//// Category --------------------------
router.get('/category', CategoryController.loadData)
router.post('/category/create', CategoryController.store);
router.get('/category/edit/:id', CategoryController.edit);
router.put('/category/update', CategoryController.update)
router.delete('/category/delete/:id', CategoryController.destroy);

//// Brand --------------------------
router.get('/brand', BrandController.loadData)
router.post('/brand/create', BrandController.store);
router.get('/brand/edit/:id', BrandController.edit);
router.put('/brand/update', BrandController.update)
router.delete('/brand/delete/:id', BrandController.destroy);

// Product 
router.get('/data-product', ProductController.loadData) //all-product
router.get('/data-product/6', ProductController.loadData6) //6-product
router.get('/my-product/:id', ProductController.DataMyProduct) // product-member
router.get('/product/edit/:id', ProductController.editProduct) // edit - product
router.delete('/product/delete/:id', ProductController.destroy) // delete - product
router.post('/product/create', requireAuth, ProductController.uploadfileProduct, ProductController.createProduct) //create- product
router.post('/product/update', requireAuth, ProductController.uploadfileProduct, ProductController.updateProduct) //update - product


router.post('/product/cart',ProductController.productinCart) // FE gửi id_product + qty qua
// router.post('/product/rate',requireAuth,ProductController.rateProduct);
router.post('/check-out',ProductController.Checkout);
router.get('/bill',ProductController.getBill);
// router.get('/example', (req, res) => {
//     res.send('Api nè !!!!')
// });

module.exports = router;