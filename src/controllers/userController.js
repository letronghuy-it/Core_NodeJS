const userModel = require('../models/user.model');

const validateUser = require('../validation/userValidation');

const multer = require('multer');
const path = require('path');
//Thiết lập multer Để sử lý hình ảnh 

//Mã hoá mật khẩu
const bcrypt = require('bcryptjs');
//token 
const jwt = require('jsonwebtoken');
//File System
const fs = require('fs');

//Send Mail 
//Cấu hình send email
const nodemailer = require('nodemailer');
const validateUDUser = require('../validation/updateuserValidation');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hale.02031982@gmail.com',
        pass: 'jkdmtluhuohozuqn',
    },
});

// Hàm Gửi Email 
const Sendpassword = async (req, res) => {
    try {
        const data = req.body;
        //check email có tồn tại không hệ thống không 
        const NotEmail = await userModel.checkemailLosspassword(data.email)
        if (Object.keys(NotEmail).length > 0) {
            return res.status(400).json(NotEmail);
        }
        
        const email        = data.email;
        const getidbyEmail = await userModel.getidbyEmail(email)
        const link         = data.link + getidbyEmail;

        // khi qua trang password thì lấy luông id của user sét vào value và ẩn đi gửi qua cùng 
        // const link = process.env.APP_URL + '/user/for_get/password/' + data.id;

        const mailOptions = {
            from: 'hale.02031982@gmail.com',
            to: data.email,
            subject: 'Đây là mã cập nhật lại mật khẩu của bạn!',
            text: 'Đây là liên kết để đặt lại mật khẩu của bạn  : ' + link,
        };

        // //Gửi email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error.message);
            } else {
                console.log('Email sent', info.response);
            }
        });
        return res.json({ message: 'Link Cập nhật tài khoản đã được gửi đến bạn!' })


    } catch (error) {
        res.status(400).json({ message: 'Lỗi hệ thống!!' })
    }
};

//Update Password 
const updatePassword = async (req, res) => {
    try {
        const data = req.body;
        if (data.password != data.re_password) {
            return res.status(400).json({ message: 'Mật Khâu không trùng khớp !' });
        }

        data.password = await bcrypt.hash(data.password, 10);
        delete data.re_password;

        const password = await userModel.updatePassword(data);
        return res.status(200).json({ message: 'Cập nhật password thành công' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}





// Upload File 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/user'); // Thư mục lưu hình ảnh (Tạo sẵn trong dự án )
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '_' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage }).array('avatar', 3);//3là số lượng file tối đa
// Upload File 

//Viết Logic API
const loadaUser = async (req, res) => {
    const user = await userModel.getuser();
    res.status(200).json({ user });
}
// create người dùng
const createUser = async (req, res) => {
    const data = req.body;
    const avatarfiles = req.files;
    data.level = parseInt(data.level)

    //tránh tên file mã hoá
    if (avatarfiles && avatarfiles.length > 0) {
        avatarfiles.forEach(file => {
            file.originalname = Buffer.from(file.originalname, 'binary').toString('utf8');
        });
    }

    const errors = validateUser(data, avatarfiles);
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    const errorsEmail = await userModel.checkemail(data.email)
    if (Object.keys(errorsEmail).length > 0) {
        return res.status(400).json({ message: 'Email đã tồn tại trong hệ thông' });
    }

    if (avatarfiles && avatarfiles.length > 0) {
        data.avatar = avatarfiles.map(file => file.path.split('public')[1]);
        data.avatar = JSON.stringify(data.avatar);
    } else if (data.avatar) {
        data.avatar = JSON.stringify(data.avatar);
    }

    data.password = await bcrypt.hash(data.password, 10);

    const user = await userModel.createUser(data);

    res.status(200).json({ 'data': user });
}

//Hàm tạo Json web token 
function createJWT(userId, username) {
    const token = jwt.sign({ userId, username }, 'huy-vic', { expiresIn: '5h' });
    return token;
}
//=>Login 
const Login = async (req, res) => {
    const data = req.body;
    const checkLogin = await userModel.checkLoginuser(data);

    if (!checkLogin) {
        return res.status(400).json({ message: 'email hoặc password không đúng' })
    }

    const token = createJWT(checkLogin.id, checkLogin.name);

    res.status(200).json({ message: 'Đăng nhập thành công', token: token, user: checkLogin })

}



// Edit người dùng 
const edituser = async (req, res) => {
    try {
        //ép kiểu id sang số nguyên đê tránh prisma hiểu id là chuỗi 
        const id = parseInt(req.params.id);
        //truyền data qua model loadAllUsers là hàm truyền qua model
        const user = await userModel.edituser(id);
        if (!user) {
            res.status(400).json({ message: 'không tìm thấy user' })
        } else {
            res.status(200).json(user)
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delte người dùng 
const deleteuser = async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await userModel.deleteuser(id);
    if (!user) {
        res.status(400).json({ message: 'User không tồn tại' })
    } else {
        res.status(200).json({ message: 'Xoá thành công user' })

    }
}

// update người dùng 
const updateuser = async (req, res) => {
    const data = req.body;
    //file
    const avatarfiles = req.files;
    // //id
    const id = parseInt(data.id);

    const checkLogin = await userModel.checkLoginuser(data);

    if (avatarfiles) {
        avatarfiles.forEach(file => {
            file.originalname = Buffer.from(file.originalname, 'binary').toString('utf8');
        });
    }
    // // request Update
    const errors = validateUDUser(data, avatarfiles);
    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }
    //Check Email
    const errorsEmail = await userModel.checkemail(data.email)
    if (Object.keys(errorsEmail).length > 0) {
        return res.status(400).json({ message: 'Email đã tồn tại trong hệ thông' });
    }
    //get ảnh  và chuyển ảnh qua json bới vì ảnh hiện tại là chuỗi 
    const getImage = await userModel.getImage(id)
    data.avatar = avatarfiles && avatarfiles.length > 0 ? avatarfiles.map(file => file.path.split('public')[1]) : getImage || '';

    data.avatar = JSON.stringify(data.avatar)
    const user = await userModel.updateuser(id, data);
    const token = createJWT(checkLogin.id, checkLogin.name);

    if (!user) {
        res.status(400).json({ message: 'User không tồn tại' })
    } else {
        const user = await userModel.edituser(id);
        res.status(200).json({ message: 'Cập nhật thành công', token: token, user: user })

    }

}



module.exports = {
    //Định nghĩa  các hàm xử lý API Ở đây
    loadaUser,
    createUser,
    edituser,
    deleteuser,
    updateuser,
    upload,
    Login,
    createJWT,
    Sendpassword,
    updatePassword

};
