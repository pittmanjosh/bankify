const express = require('express');
const Router = express.Router();
const auth = require('../../middleware/auth');

Router.use(auth)

Router.route('/')
  .get((req,res)=>{
    // Read personal data
    res.send({
      uid: req.uid,
      name: req.name,
      email: req.email
    })
    
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