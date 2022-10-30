const sequelize = require("./connection");

let createTables = () => {
    sequelize.sync().then(() => {
        console.log("table created successfullyyy");
    }).catch(er => console.log(er))
}

module.exports = createTables;