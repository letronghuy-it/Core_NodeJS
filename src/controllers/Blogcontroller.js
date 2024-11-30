const BlogModel = require('../models/Blog.model')
const validateBlog = require('../validation/BlogValidation');
const multer = require('multer');
const path = require('path');
const UDblogvalidation = require('../validation/UpdateBlogValidation');
const { param } = require('../router/api');

//Thiết lập multer Sử lý hình ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/blogs') //Lưu hình ảnh
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname))
    }
})
const upload = multer({ storage }).single('image'); // upload 1 ảnh \
const uploadcomment = multer({ storage }).single('avatar'); // upload 1 ảnh \

// LoadBlog
const loadBlog = async (req, res) => {
    const Blog = await BlogModel.loadBlog()
    res.status(200).json(Blog);
}
// ADD BLOG
const CreateBlog = async (req, res) => {
    const data = req.body;
    let imageBlog = req.file;
    data.id_user = parseInt(data.id_user);
    // Chuyển đổi tên file thành chuỗi UTF-8
    // if (imageBlog) {
    //     imageBlog.path = Buffer.from(imageBlog.path, 'binary').toString('utf8');
    // }
    // Tách Chuỗi
    let pathParts = imageBlog.path.split('public');
    let savedPath = pathParts[1]; // Lấy phần sau 'public'

    const errors = validateBlog(data, imageBlog);
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    data.image = savedPath ? savedPath : '';

    const blog = await BlogModel.CreateBlog(data);
    res.status(200).json(blog)
}

// Edit blog
const editBlog = async (req, res) => {
    const id = parseInt(req.params.id);
    const blog = await BlogModel.editBlog(id);
    if (!blog) {
        res.status(400).json({ message: 'Không tìm thấy blog' })
    } else {
        res.status(200).json(blog)
    }
}
// Updata Blog
const updateBlog = async (req, res) => {
    const data = req.body;
    const id = parseInt(data.id);
    const imageBlog = req.file;
    let savedPath;

    if (imageBlog) {
        imageBlog.path = Buffer.from(imageBlog.path, 'binary').toString('utf8');
        let pathParts = imageBlog.path.split('public');
        savedPath = pathParts[1]; // Lấy phần sau 'public'
    }

    const errors = UDblogvalidation(data, imageBlog);
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    const getImage = await BlogModel.getImageBlog(id);

    data.image = savedPath ? savedPath : getImage;
    const blog = await BlogModel.updateBlog(id, data);

    if (!blog) {
        res.status(400).json({ message: 'Blog không tông tại' })
    } else {
        res.status(200).json({ message: 'Update Blog Thành Công', blog })
    }
}

const deleteBlog = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const blog = await BlogModel.deleteBlog(id);
        if (!blog) {
            res.status(400).json({ message: 'Blog không tông tại' })
        } else {
            const data = await BlogModel.loadBlog();
            res.status(200).json({ message: 'Xoá thành công', data });

        }
    } catch (error) {
        res.status(400).json({ error: 'Hệ Thống Không Cho phép xoá blog khi chua xoá comment' });
    }

}
//comment Blog
const Blogcomment = async (req, res) => {
    const data = req.body;
    const userimage = req.file;
    if (data.id_comment !== undefined) {
        data.level = parseInt(data.id_comment);
    }
    //Gán Xong xoá 
    delete data.id_comment;

    let pathParts = imageBlog.path.split('public');
    let savedPath = pathParts[1]; // Lấy phần sau 'public'

    data.id_blog = parseInt(data.id_blog);
    data.id_user = parseInt(data.id_user);

    data.avatar = savedPath ? savedPath.path : '';

    const blogcomment = await BlogModel.Blogcomment(data);
    res.status(200).json(blogcomment)
}
const rateBlog = async (req, res) => {
    try {
        const data = req.body;
        data.id_blog = parseInt(data.id_blog);
        data.id_user = parseInt(data.id_user);
        data.rate    = parseInt(data.rate);
        const rateBlogs = await BlogModel.ratecreateBlog(data);
        if (!rateBlogs) {
            res.status(400).json({ message: 'Không tìm thấy blog' })
        } else {
            res.status(200).json(rateBlogs)
        }    
    } catch (error) {
        console.log(error);
    }

}
const datarateblog = async(req,res) =>{
   const id         = parseInt(req.params.id);
   const rateBlog   = await BlogModel.rateBlog(id);
   res.status(200).json(rateBlog)
}


module.exports = {
    loadBlog,
    CreateBlog,
    upload,
    editBlog,
    updateBlog,
    deleteBlog,
    Blogcomment,
    uploadcomment,
    rateBlog,
    datarateblog
}