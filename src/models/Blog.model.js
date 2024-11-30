const { PrismaClient } = require("../generated/client");

const prisma = new PrismaClient();

const loadBlog = async () => {
    return prisma.blog.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        include:{
            user:true,
            rateBlogs:true
        }
    });
}

const CreateBlog = async (data) => {
    return prisma.blog.create({ data })
}

//GetblogwithComment
const editBlog = async (BlogId) => {
    return prisma.blog.findUnique({
        where: {
            id: BlogId,
        },
        include: {
            user:true,
            blogcomments: {
                include: {
                    user: true
                },
            },
        },
    });

}
const updateBlog = async ( id,data) => {
    delete data.id
    return prisma.blog.update({ where: { id:id }, data })
}
const deleteBlog = async (id) => {
    return prisma.blog.delete({ where: { id } });
}

//Comment Blog 
const Blogcomment = async (data) => {
    return prisma.blogcomment.create({ data })
}
//Get image Blog 
const getImageBlog = async (id) =>{
    try {
        const blog = await prisma.blog.findUnique({
            where: { id: id }
        })
        if (!blog) {
            throw new Error(`blog with id ${id} not found`);
        }
        //Phải chuyển thành mảng để qua bên kia lấy ra là cái mảng chú không phải cái chuỗi 
        return blog.image; 
    } catch (err) {
        console.error(err);
        throw err;
    }
}
//Rate generate Blog 
const ratecreateBlog = async (data) =>{
    
    return prisma.rateBlog.create({data})
}
//rateBlog
const rateBlog = async (id) =>{
    return prisma.rateBlog.findMany({
        where: {id_blog:id}
    })
}

module.exports = {
    loadBlog,
    CreateBlog,
    editBlog,
    updateBlog,
    deleteBlog,
    Blogcomment,
    getImageBlog,
    ratecreateBlog,
    rateBlog
}