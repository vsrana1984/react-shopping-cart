const express = require('express');
const Order = require('../models/orderModel');

const router = express.Router();


router.post('/', async (req, res) => {
  console.log(req.body);
    if(
      !req.body.name ||
      !req.body.email ||
      !req.body.address ||
      !req.body.total ||
      !req.body.cartItems
    ){
        res.send({ message: "Data is required" }); 
    }
    const order = await Order(req.body).save();
    res.send(order);

});

module.exports = router