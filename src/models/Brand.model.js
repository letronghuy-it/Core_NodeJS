const { PrismaClient } = require("../generated/client")

const prisma = new PrismaClient;


const LoadData = async () => {
    return prisma.brand.findMany();
}

const Store = async (data) => {
    return prisma.brand.create({ data })
}

const Edit = async (id) => {
    return prisma.brand.findUnique({
        where: { id: id }
    })
}
const destroy = async (id) => {
    return prisma.brand.delete({
        where: { id: id }
    })
}
const update = async (data, id) => {
    delete data.id
    return prisma.brand.update({ where: { id: id }, data })
}
//Check Brand
const checkBrand = async (slug) => {
    const existingBrand = await prisma.brand.findFirst({
        where: { slug },
    });

    const errors = {};

    if (existingBrand) {
        errors.message = 'Brand đã tồn tại trong hệ thống';
    }
    return errors;
}

module.exports = {
    LoadData,
    Store,
    Edit,
    destroy,
    update,
    checkBrand
}