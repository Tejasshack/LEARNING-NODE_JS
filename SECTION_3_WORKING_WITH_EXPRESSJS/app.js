// Import the 'http' module from Node.js standard library (not used directly in this code)
const http = require("http");
const path = require('path')

const rootdir = require('./util/path')

// Import the 'express' module to create the Express application
const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Import the 'body-parser' module to parse incoming request bodies
const bodyParser = require("body-parser");

// Create an instance of an Express application
const app = express();

// Use the 'body-parser' middleware to parse URL-encoded data
// extended: true allows for rich objects and arrays to be encoded into the URL-encoded format
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(rootdir, 'public')))
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', 'error-404.html'));
  //we do not need to use ../ is we are present in parent directory

  res.status(404).sendFile(path.join(rootdir, 'views', 'error-404.html'));
});
 
// Start the server and listen on port 3000
app.listen(3000, () => {
  // Log a message to the console when the server starts successfully
  console.log("Server is running on http://localhost:3000");
});
