const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

//get all products list
router.get('/',async (req, res)=>{
  const products = await Product.find({});
  res.send(products);
});

//create a product

router.post('/', async (req, res)=>{
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

router.delete('/:id', async (req, res)=>{
    console.log(req.params.id);
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

module.exports = router