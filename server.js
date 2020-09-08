const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');


const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost/react-shopping-cart-db",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String,default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

//get all products list
app.get('/api/products',async (req, res)=>{
  const products = await Product.find({});
  res.send(products);
});

//create a product

app.post('/api/products', async (req, res)=>{
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete('/api/products/:id', async (req, res)=>{
    console.log(req.params.id);
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

app.listen(port, () => console.log('server at http://localhost:%s',port));
