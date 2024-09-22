const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (callBack) => {
  fs.readFile(p, (err, filecontent) => {
    if (err) {
      // return [];
      return callBack([]);
    }
    // return JSON.parse(filecontent)
    callBack(JSON.parse(filecontent));
  });
};

module.exports = class Product {
  constructor(t, a, p,d) {
    this.title = t;
    this.author = a;
    this.price = p;
    this.description = d;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }

  // save() {
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     "data",
  //     "products.json"
  //   );
  //   fs.readFile(p, (err, filecontent) => {
  //     // console.log(err);
  //     let products = [];
  //     if (!err) {
  //       products = JSON.parse(filecontent);
  //     }
  //     products.push(this);
  //     fs.writeFile(p, JSON.stringify(products) , (err) => {
  //       console.log(err);
  //     });
  //   });
  //   // products.push(this);
  // }

  // static fetchAll(callBack) {
  //   // return this.products;
  //   const p = path.join(
  //     path.dirname(process.mainModule.filename),
  //     "data",
  //     "products.json"
  //   );
  //   fs.readFile(p , (err,filecontent) => {
  //     if(err){
  //       // return [];
  //       callBack([])
  //     }
  //     // return JSON.parse(filecontent)
  //     callBack(JSON.parse(filecontent));
  //   })
  //   // return products;
  // }
};
