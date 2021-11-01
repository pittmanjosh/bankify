const { initializeApp } = require('firebase-admin/app');

var app;

if (!app){
  app = initializeApp(process.env.GOOGLE_CONFIG || require('../.bankify.json'))
}

if (app) {
  console.log("ADMIN Configured")
} else {
  throw new Error("ADMIN NOT CONFIGURED")
}

module.exports = app;