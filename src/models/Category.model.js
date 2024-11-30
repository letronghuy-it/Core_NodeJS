const { PrismaClient } = require("../generated/client")

const prisma = new PrismaClient;


const LoadData = async () => {
    return prisma.category.findMany();
}

const Store = async (data) => {
    return prisma.category.create({ data })
}

const Edit = async (id) => {
    return prisma.category.findUnique({
        where: { id: id }
    })
}
const destroy = async (id) => {
    return prisma.category.delete({
        where: { id: id }
    })
}
const update = async (data, id) => {
    delete data.id
    return prisma.category.update({ where: { id: id }, data })
}
//Check Category
const checkCategory = async (slug) => {
    const existingCategory = await prisma.category.findFirst({
        where: { slug },
    });

    const errors = {};

    if (existingCategory) {
        errors.message = 'Category đã tồn tại trong hệ thống';
    }
    return errors;
}
module.exports = {
    LoadData,
    Store,
    Edit,
    destroy,
    update,
    checkCategory
}