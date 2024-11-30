const { PrismaClient } = require("../generated/client");

const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

const getuser = async () => {
    return prisma.user.findMany();

}
const createUser = async (data) => {
    return prisma.user.create({ data });
}

const edituser = async (id) => {
    return prisma.user.findUnique({ where: { id } });
};
const deleteuser = async (id) => {
    return prisma.user.delete({ where: { id } });
}

const updateuser = async (id, data) => {
    // Remove id from data object
    delete data.id;

    // Update user
    return prisma.user.update({ where: { id }, data });
}


//Kiểm tra   email có  trong hệ thống chưa
const checkemail = async (email) => {
    const existingUser = await prisma.user.findFirst({
        where: { email },
    });

    const errors = {};

    if (existingUser) {
        errors.message = 'Email đã tồn tại trong hệ thống';
    }
    return errors;
}
//Kiểm tra email không có trong hệ thống
const checkemailLosspassword = async (email) => {
    const existingUser = await prisma.user.findFirst({
        where: { email },
    });

    const errors = {};

    if (!existingUser) {
        errors.email = 'Email không tồn tại trong hệ thống';
    }
    return errors;
}

const updatePassword = async (data) => {
    return prisma.user.update({
        where: { id: data.id },
        data: {
            password: data.password,
        }
    });
}


// Check login 
const checkLoginuser = async (data) => {

    const existingUser = await prisma.user.findFirst({
        where: {
            AND: [
                { email: data.email },
            ]
        }
    });

    if (!existingUser) {
        return false;
    }

    const passwordMatch = await bcrypt.compare(data.password, existingUser.password);

    if (!passwordMatch) {
        return false;
    }

    return existingUser;

}

//Getidbyemail
const getidbyEmail = async (email) => {
    const user = await prisma.user.findFirst({
        where: { email: email }

    })
    if (user == undefined) {
        throw new Error('Email Không tồn tại trong hệ thống');
    }
    return user?.id;

}
// Get image exit
const getImage = async(id) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: id }
        })
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        //Phải chuyển thành mảng để qua bên kia lấy ra là cái mảng chú không phải cái chuỗi 
        return JSON.parse(user.avatar); 
    } catch (err) {
        console.error(err);
        throw err;
    }
}


module.exports = {
    getuser,
    createUser,
    edituser,
    deleteuser,
    updateuser,
    checkemail,
    checkLoginuser,
    checkemailLosspassword,
    updatePassword,
    getidbyEmail,
    getImage
}

