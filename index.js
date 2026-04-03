const express = require('express');
require('dotenv').config();

const database = require("./config/database");
const systemConfig = require("./config/system")

database.connect();


const routeAdmin = require("./routes/admin/index.route")
const routeClient = require("./routes/client/index.route");

const app = express();
const port = process.env.PORT;



app.set("views", "./views");
app.set("view engine", "pug")

app.use(express.static("public"));

// Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;



//Routes
routeClient(app);
routeAdmin(app);



app.listen(port, () => {
  console.log(`App listening on ${port} : http://localhost:3000/ `)
})