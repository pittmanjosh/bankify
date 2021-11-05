const express = require('express');
const Router = express.Router();
const auth = require('../../middleware/auth');

Router.use(auth)

Router.route('/')
  .get((req,res)=>{
    // Read personal data
    const fbUserData = {
      uid: req.uid,
      name: req.name,
      email: req.email
    };
    
    res.send(fbUserData);
  })
  .post((req,res)=>{
    // Create user

  })
  .put((req,res)=>{
    // Update account
  })
  // .delete((req,res)=>{
  //   // Delete accoun
  // })

module.exports = Router;