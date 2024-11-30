const CategoryModel = require('../models/Category.model')


const loadData = async (req, res) => {
    const category = await CategoryModel.LoadData()
    res.status(200).json(category);
}
const store = async (req, res) => {
    const data = req.body;

    const errorsCategory = await CategoryModel.checkCategory(data.slug)
    if (Object.keys(errorsCategory).length > 0) {
        return res.status(400).json({ message: 'Category đã tồn tại trong hệ thông' });
    }
    const category = await CategoryModel.Store(data)
    if (category) {
        res.status(200).json(category);
    } else {
        return res.status(400).json({ message: 'Thêm Mới Thất Bại !!' });
    }
}
const edit = async (req, res) => {
    const id = parseInt(req.params.id);
    const category = await CategoryModel.Edit(id)
    if (category) {
        res.status(200).json(category);
    } else {
        return res.status(400).json({ message: 'Không tìm thấy Category !!' });
    }
}
const destroy = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const category = await CategoryModel.destroy(id)
        if (category) {
            const category = await CategoryModel.LoadData()
            res.status(200).json({ message: 'Xoá thành công', category });
        } else {
            return res.status(400).json({ message: 'Không tìm thấy Category !!' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Lỗi Hệ thống !!' });
    }

}

const update = async (req, res) => {
    const data = req.body;
    const id   = parseInt(data.id);
   
    const errorsCategory = await CategoryModel.checkCategory(data.slug)
    if (Object.keys(errorsCategory).length > 0) {
        return res.status(400).json({ message: 'Category đã tồn tại trong hệ thông' });
    }
    const category = await CategoryModel.update(data, id);

    if (!category) {
        res.status(400).json({ message: 'Category không tồn tại' })
    } else {
        res.status(200).json({ message: 'Update Category Thành Công', category })
    }
}

module.exports = {
    loadData,
    store,
    edit,
    destroy,
    update,
    

}