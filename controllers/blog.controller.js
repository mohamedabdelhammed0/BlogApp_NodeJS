let blogModel = require("../model/blogs_model");


let getAllBlogs = async (req,res) => {
    let allBlogs = await blogModel.findAll();
    res.render("home.ejs",{allBlogs:allBlogs})
}

let addNewBlog = async (req,res) => {
    await blogModel.create({name:req.body.name,description:req.body.description})
    res.redirect("/");
}

let getBlogById = async (req,res) => {
    
    let blog = await blogModel.findOne({where:{id:req.params.id}})
   
    if(blog==null){
        res.status(404).json({"message":"not found"});
    }else{
        console.log(blog);
        res.render("blog.ejs",{blog:blog});
    }
}
let updateBlog = async (req,res) => {
    await blogModel.update({name:req.body.name,description:req.body.description},{where:{id:req.body.id}});
    res.redirect("/");
}
let deleteBlog = async (req,res) => {   
    await blogModel.destroy({where:{id:req.body.id}})
    res.redirect("/");
}


module.exports = {
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    addNewBlog
}
