const Product = require("../models/product");

const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  //   products.push({ title: req.body.title });
  //   res.redirect("/");

  const product = new Product(req.body.title); //new product creation
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // const product = new Product.fetchAll();
  // res.render("shop", {
  //   prods: products,
  //   pageTitle: "Shop",
  //   path: "/",
  //   hasProducts: products.length > 0,
  //   activeShop: true,
  //   productCSS: true,
  // });
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
