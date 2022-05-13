const ProductRouter = require("express").Router();
const Product = require("../models/product.model");
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require("../controllers/productController");

ProductRouter.route("").get(getAllProducts).post(createProduct);

ProductRouter.route("/:productId")
  .get(getSingleProduct)
  .delete(deleteProduct)
  .patch(updateProduct);


  module.exports = ProductRouter;
