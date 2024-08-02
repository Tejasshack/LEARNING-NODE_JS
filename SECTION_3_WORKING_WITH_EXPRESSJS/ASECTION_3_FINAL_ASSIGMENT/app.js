const bodyParser = require("body-parser");
const express = require("express");
const path = require('path')

const homeRoutes = require("./router/homeRoutes");
const contactRoutes = require("./router/contactRoutes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeRoutes);
app.use(contactRoutes);


app.use((req,res,next) => {
    res.status(400).sendFile(path.join(__dirname, 'views' , 'error404.html'))
})

app.listen("3000", () => {
  console.log("The Server has started at local Host::" + 3000);
});
