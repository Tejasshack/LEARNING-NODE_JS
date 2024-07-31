const express = require('express')
const path = require('path')

const router = express.Router();

// // Define a middleware function for the '/add-product' route
// app.use('/add-product', (req, res, next) => {
//     // Log a message to the console
//     console.log("Hi this is from tejas");
    
//     // Send an HTML form as the response
//     // The form uses POST method and submits data to '/product' route
//     res.send('<html><form action="/product" method="POST" ><input type="text" name="username"><button type="submit">Submit</button></input></form></html>');
//   });

  // Define a middleware function for the '/add-product' route
router.get('/add-product', (req, res, next) => {
    // Log a message to the console
    console.log("Hi this is from tejas");
    
    // Send an HTML form as the response
    // The form uses POST method and submits data to '/product' route
    // res.status(302).send('<html><form action="/admin/product" method="POST" ><input type="text" name="username"><button type="submit">Submit</button></input></form></html>');
    // res.sendFile(__dirname , '../' , 'views' , 'add-product.html') //before sending response file we need to join the paths
    res.sendFile(path.join( __dirname , '../' , 'views' , 'add-product.html'))
  });
  
  // // Define a middleware function for the '/product' route
  // app.use('/product', (req, res, next) => {
  //   // Log the parsed request body to the console
  //   // The 'body-parser' middleware parses the form data and makes it available on req.body
  //   console.log(req.body);
    
  //   // Redirect the user to the root route ('/')
  //   res.redirect('/');
  // });
  
  // Define a middleware function for the '/product' route
  router.post('/product', (req, res, next) => {
    // Log the parsed request body to the console
    // The 'body-parser' middleware parses the form data and makes it available on req.body
    console.log(req.body);
    
    // Redirect the user to the root route ('/')
    res.redirect('/');
  });

  module.exports = router