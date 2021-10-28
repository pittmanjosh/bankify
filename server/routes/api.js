const express = require('express');

const Router = express.Router();

Router.use(function timeLog (req, res, next) {
  console.log('Time: ', new Date().toLocaleString('en-US', { timeZone: 'EST' }))
  next()
})

Router.route('/')
  .get(function (req, res) {
    res.send({ message: process.env.REACT_APP_WORD})
  })
  .post(function (req,res) {
    res.send({ message: "post"})
  })
  .put(function (req,res) {
    res.send({ message: "put"})
  })
  .delete(function (req,res) {
    res.send({ message: "delete"})
  })
  

module.exports = Router;