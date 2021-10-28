const express = require('express');

const Router = express.Router();

Router.use(function timeLog (req, res, next) {
  console.log('Time: ', new Date().toLocaleString('en-US', { timeZone: 'EST' }))
  next()
})

Router.route('/')
  .get(function (req, res) {
    res.send('get')
  })
  .post(function (req,res) {
    res.send('post')
  })
  .put(function (req,res) {
    res.send('put')
  })
  .delete(function (req,res) {
    res.send('delete')
  })
  

module.exports = Router;