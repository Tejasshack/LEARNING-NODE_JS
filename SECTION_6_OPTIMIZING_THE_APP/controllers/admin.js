const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    productCSS: true,
  });
};

  
exports.postAddProduct = (req, res, next) => {
  //   products.push({ title: req.body.title });
  //   res.redirect("/");

  const product = new Product(req.body.title, req.body.author, req.body.price, req.body.description);  //new product creation
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/product",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
