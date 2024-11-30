const BrandModel = require('../models/Brand.model')


const loadData = async (req, res) => {
    const brand = await BrandModel.LoadData()
    res.status(200).json(brand);
}
const store = async (req, res) => {

    const data = req.body;
    const errorsCategory = await BrandModel.checkBrand(data.slug)

    if (Object.keys(errorsCategory).length > 0) {
        return res.status(400).json({ message: 'Brand đã tồn tại trong hệ thống' });
    }
    const brand = await BrandModel.Store(data)
    if (brand) {
        res.status(200).json(brand);
    } else {
        return res.status(400).json({ message: 'Thêm Mới Thất Bại !!' });
    }
}
const edit = async (req, res) => {
    const id    = parseInt(req.params.id);
    const brand = await BrandModel.Edit(id)
    if (brand) {
        res.status(200).json(brand);
    } else {
        return res.status(400).json({ message: 'Không tìm thấy Brand !!' });
    }
}
const destroy = async (req, res) => {
    try {
        const id    = parseInt(req.params.id);
        const brand = await BrandModel.destroy(id)
        if (brand) {
            const brand = await BrandModel.LoadData()
            res.status(200).json({ message: 'Xoá thành công', brand });
        } else {
            return res.status(400).json({ message: 'Không tìm thấy Brand !!' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Lỗi Hệ thống !!' });
    }

}

const update = async (req, res) => {
    const data = req.body;
    const id   = parseInt(data.id);
  
    const errorsBrand = await BrandModel.checkBrand(data.slug)
    if (Object.keys(errorsBrand).length > 0) {
        return res.status(400).json({ message: 'Brand đã tồn tại trong hệ thông' });
    }

    const brand = await BrandModel.update(data, id);
    if (!brand) {
        res.status(400).json({ message: 'Brand không tồn tại' })
    } else {
        res.status(200).json({ message: 'Update Brand Thành Công', brand })
    }
}
module.exports = {
    loadData,
    store,
    edit,
    destroy,
    update

}