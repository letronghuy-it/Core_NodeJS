const updateProductvalidation = (data, file) => {
    const errors = {};
    if (!data.name) {
        errors.name = 'Vui lòng nhập tên sản phẩm'
    }
    if (!data.price) {
        errors.price = 'Vui lòng nhập giá cho sản phẩm'
    }
    if (!data.id_user) {
        errors.id_user = 'Vui lòng phải có id_User'
    }
    if (!data.id_category) {
        errors.id_category = 'Vui lòng phải có id_category'
    }
    if (!data.id_brand) {
        errors.id_brand = 'Vui lòng phải có id_brand'
    }
    if (file) {
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
module.exports = updateProductvalidation