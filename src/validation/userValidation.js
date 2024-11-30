const validateUser = (data, file) => {
    const errors = {};
    if (!data.name) {
        errors.name = 'Vui lòng nhập Tên';
    }

    if (!data.email) {
        errors.email = 'Vui lòng nhập email';
    }
    if (!data.password) {
        errors.password = 'Vui lòng nhập password';
    }
    if (file) {
        
    }
    if (file.length == 0) {
        errors.avatar = 'Vui lòng upload avatar';
    } else {
        file.map((value, key) => {
            const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
            if (!allowedFormats.includes(value.mimetype)) {
                errors.avatar = 'Định dạng file không hợp lệ .Chỉ chấp nhận JPEG,FNG hoặc GIF';
            }
            //Kiểm tra dung lượng của file avatar (<1mb)
            const maxsize = 1024 * 1024;
            if (value.size > maxsize) {
                errors.avatar = 'Dung lượng file quá lớn .Vui lòng chọn file nhỏ hơn 1MB';
            }
        })

    }
    return errors;
}

module.exports =  validateUser;
  
