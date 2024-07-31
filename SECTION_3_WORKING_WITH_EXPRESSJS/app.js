// Import the 'http' module from Node.js standard library (not used directly in this code)
const http = require('http');

// Import the 'express' module to create the Express application
const express = require('express');

// Import the 'body-parser' module to parse incoming request bodies
const bodyParser = require('body-parser');

// Create an instance of an Express application
const app = express();

// Use the 'body-parser' middleware to parse URL-encoded data
// extended: true allows for rich objects and arrays to be encoded into the URL-encoded format
app.use(bodyParser.urlencoded({ extended: true }));

// Define a middleware function for the '/add-product' route
app.use('/add-product', (req, res, next) => {
  // Log a message to the console
  console.log("Hi this is from tejas");
  
  // Send an HTML form as the response
  // The form uses POST method and submits data to '/product' route
  res.send('<html><form action="/product" method="POST" ><input type="text" name="username"><button type="submit">Submit</button></input></form></html>');
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
app.post('/product', (req, res, next) => {
  // Log the parsed request body to the console
  // The 'body-parser' middleware parses the form data and makes it available on req.body
  console.log(req.body);
  
  // Redirect the user to the root route ('/')
  res.redirect('/');
});

// Define a middleware function for the root route ('/')
app.use('/', (req, res, next) => {
  // Send a plain text response to the client
  res.send("Hi User this is home page");
  
  // Call the next middleware function in the stack
  // This is unnecessary here since there's no more middleware to handle after this
  next();
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  // Log a message to the console when the server starts successfully
  console.log('Server is running on http://localhost:3000');
});
