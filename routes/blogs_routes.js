const app =  require("express").Router();

let blogController = require("../controllers/blog.controller")

app.get("/getAllBlogs",blogController.getAllBlogs);
app.get("/",blogController.getAllBlogs);
app.get("/getBlogById/:id",blogController.getBlogById);
app.post("/addNewBlog",blogController.addNewBlog);
app.post("/updateBlog",blogController.updateBlog);
app.post("/deleteBlog",blogController.deleteBlog);

module.exports = app;