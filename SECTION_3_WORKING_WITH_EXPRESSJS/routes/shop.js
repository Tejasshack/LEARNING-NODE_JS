const express = require("express");
const path = require("path");

const rootdir = require('../util/path')

const router = express.Router();

// Define a middleware function for the root route ('/')
// router.get('/', (req, res, next) => {
//     // Send a plain text response to the client
//     res.send("Hi User this is home page");

//     // Call the next middleware function in the stack
//     // This is unnecessary here since there's no more middleware to handle after this
//     next();
//   });
router.get("/", (req, res) => {
  // Send a plain text response to the client
//   res.sendFile(path.join(__dirname, "../", "views", "shop.html")); //use new method to get files path
res.sendFile(path.join(rootdir , "views", "shop.html"));

  // Call the next middleware function in the stack
  // This is unnecessary here since there's no more middleware to handle after this
  
});

module.exports = router;
