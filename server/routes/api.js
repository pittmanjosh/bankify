const express = require('express');
const auth = require('../../middleware/auth')
const Router = express.Router();
const dbo = require('../db.js');

Router.use(function timeLog (req, res, next) {
  console.log('API ACCESSED AT: ', new Date().toLocaleString('en-US', { timeZone: 'EST' }))
  next()
})

Router.use(auth);

const dbConnect = dbo.getDb();

Router.route('/')
  .get(function (req, res) {
    // return user balance
    (async ()=>{
      dbConnect.collection("users")
      .find({uid: req.uid})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          res.send(result);
        }
      });
    })();
  })
  .post(function (req,res) {
    // create user in mongoDB
    const newUser = {
      uid: req.uid,
      name: req.name,
      email: req.email,
      photoURL: req.photoURL,
      checking: 0,
      savings: 0
    };
    console.log("Creating:",newUser)
    (async ()=>{
      dbConnect.collection("users")
      .insertOne(newUser, (err, result)=>{
        if (err) {
          res.status(400).send("Error adding user");
        } else {
          res.status(201)
        }
      });
    })();
  })
  .put(function (req,res) {
    res.send({ message: "put"})
  })
  .delete(function (req,res) {
    res.send({ message: "delete"})
  });

  

module.exports = Router;