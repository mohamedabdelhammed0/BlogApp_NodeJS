let express =  require("express")
const app = express();
let blogRouters = require("./routes/blogs_routes");
let bodyParser = require("body-parser")
let path = require("path");
let staticFiles = path.join(__dirname,"public");
let createTables = require("./model/createTables");

app.set("view-engine","ejs")
app.use(express.static(staticFiles))
// to get data when we post it from template engine
app.use(bodyParser.urlencoded({ extended : false }))
app.use(express.json())
app.use(blogRouters);
  


app.listen(8080,() => console.log("running "));