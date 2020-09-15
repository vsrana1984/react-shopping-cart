const mongoose = require('mongoose');
const shortid = require('shortid');

const ordersSchema= new mongoose.Schema({
  _id: {
       type: String,
       default: shortid.generate 
  },
  email: String,
  name: String,
  address: String,
  total: Number,
  cartItems: [{
    _id: String,
    title: String,
    price: Number,
    count: Number,
  }],
},
{
  timestamps: true,
});

module.exports = mongoose.model('Order', ordersSchema);