const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

//api for sign in 
router.post('/login', async(req, res)=>{
  
  try {
    const signinUser = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });
      
   if(signinUser){
      
      res.send({
        id: signinUser._id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: getToken(signinUser)
      });
   }else{
     
    res.status(401).send({msg: 'User credential is wrong'});
  
  }

  } catch (error) {
      res.status(401).send({msg: error.message});
  }

  
});

//register new user...
router.post('/register', async (req, res) =>{

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: false
    });
  
    const newUser = await user.save();
    if(newUser){
      res.send({
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser)
      });
    }

  } catch (error) {
    res.send({msg: error.message});
  }
  


});

module.exports = router;
