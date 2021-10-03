const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { setStatics } = require("./utils/statics");
const adminRoutes = require("./routes/admin");
const indexRoutes = require("./routes/index");
const errorControllers = require("./controllers/error")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//EJS
app.set("view engine", "ejs");
app.set("views", "views");

//Statics
setStatics(app);

//Routes
app.use(indexRoutes);
app.use("/admin", adminRoutes);

//404
app.use(errorControllers.get404);

app.listen(3000, () => console.log(`Server is running.`));
