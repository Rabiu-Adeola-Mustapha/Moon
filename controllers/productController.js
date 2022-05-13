const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.msg);
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    const product = await Product.findById(productId);

    if (!product) return res.status(400).json({ msg: "Product Not Found" });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const createProduct = async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).json({ msg: "Please enter all fields corectly" });

    const product = await Product.create({
      brandName: req.body.brandName,
      category: req.body.category,
      quantity: req.body.quantity,
      price: req.body.price,
      decription: req.body.description,
    });

    res.status(201).json(product);
    
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    let product = await Product.findById(productId);
    if (!product) return res.status(400).json({ msg: "Product Not FOund" });

    await Product.remove(product);

    res.status(200).json({ msg: "Product deleted Successfully" });
  } catch (error) {
    res.status(400).json(error.msg);
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    let product = await Product.findById(productId);

    if (!product) return res.status(400).json({ msg: "Product Not Found" });

    product = await Product.findByIdAndUpdate(
      productId,
      {
        brandName: req.body.brandName,
        category: req.body.category,
        quantity: req.body.quantity,
        price: req.body.price,
        decription: req.body.description,
      },
      { new: true }
    
    );

    res.status(200).json(product);

  } catch (error) {
    res.status(400).json(error.msg);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
