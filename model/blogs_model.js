const  Sequelize = require('sequelize');
const connection = require("./connection");


const blog = connection.define('blog',{
    name:Sequelize.STRING,
    description:Sequelize.STRING
})

module.exports = blog;