const fs = require("fs");
const path = require("path");

// Define the path to the products.json file
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

// Helper function to read products from the file
const getProductsFromFile = (callBack) => {
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      // If there's an error, return an empty array
      return callBack([]);
    }
    // Parse and return the file content as a JSON array
    callBack(JSON.parse(filecontent));
  });
};

// Define the Product class
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  // Method to save a product
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  // Static method to fetch all products
  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }

  // Alternative save method (commented out)
  // save() {
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     "data",
  //     "products.json"
  //   );
  //   fs.readFile(p, (err, filecontent) => {
  //     let products = [];
  //     if (!err) {
  //       products = JSON.parse(filecontent);
  //     }
  //     products.push(this);
  //     fs.writeFile(p, JSON.stringify(products), (err) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   });
  // }

  // Alternative fetchAll method (commented out)
  // static fetchAll(callBack) {
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     "data",
  //     "products.json"
  //   );
  //   fs.readFile(p, (err, filecontent) => {
  //     if (err) {
  //       callBack([]);
  //     } else {
  //       callBack(JSON.parse(filecontent));
  //     }
  //   });
  // }
};
  