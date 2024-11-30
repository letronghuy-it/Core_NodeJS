const UDblogvalidation = (data, file) => {
    const errors = {};
    if (!data.title) {
        errors.title = 'Vui lòng nhập title cho blog'
    }

    if (!data.description) {
        errors.description = 'Vui lòng nhập description cho blog'
    }
    if (!data.content) {
        errors.content = 'Vui lòng nhập content cho blog'
    }

    if (file) {
        //Kiểm tra định dạng của file imageBlog
        const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
        if(!allowedFormats.includes(file.mimetype)){
            errors.image = 'Định dạng file không hợp lệ .Chỉ chấp nhận JPEG,FNG hoặc GIF';
        }
        const maxsize = 1024*1024;
        if(file.size >maxsize){
            errors.image = 'Dung lượng file quá lớn . Vui lòng chọn file có dung lượng nhỏ hơn 1MB';
        }
    }
    return errors;

};
module.exports = UDblogvalidation