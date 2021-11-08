const express = require("express");
const auth = require("../../middleware/auth");
const Router = express.Router();
const dbo = require("../db.js");

Router.use(function timeLog(req, res, next) {
  console.log(
    "API ACCESSED AT: ",
    new Date().toLocaleString("en-US", { timeZone: "EST" })
  );
  next();
});

Router.use(auth);
Router.use(express.urlencoded())
Router.route("/")
  .get(function (req, res) {
    // return user balance
    (async () => {
      const dbConnect = dbo.getDb();

      dbConnect
        .collection("users")
        .findOne({ uid: req.uid }, (err, result)=>{
          if (err) {
            res.status(400).send("Error fetching listings!");
          } else {
            res.send(result);
          }
        });
    })();
  })
  .post(function (req, res) {
    // create user in mongoDB
    const newUser = {
      uid: req.uid,
      name: req.name,
      email: req.email,
      photoURL: req.photoURL,
      checking: "0",
      savings: "0",
    };

    (async () => {
      const dbConnect = dbo.getDb();
      const collection = dbConnect.collection("users");
      collection.findOne({ uid: req.uid }, (err, result)=>{
        if (result) {
          res.status(400).send(`${req.name} exists`);
        } 
      });

      dbConnect.collection("users").insertOne(newUser, (err, result) => {
        if (err) {
          res.status(400).send("Error adding user");
        } else {
          res.status(201);
        }
      });
    })();
  })
  .put(function (req, res) {
    const account = req.body.account;
    const amount = req.body.amount;
    if (!account || !amount) {
      res.status(400).send("Missing parameters");
    } else {
      console.log("meets parameters");
    }

    console.log("account:",account);
    console.log("amount:",amount);

    const isSavings = account === "savings";
    const update = (isSavings) ? (
      {"savings": amount}
    ) : (
      {"checking": amount}
    );
    const operation = { $set: update};
    const name = req.name;
    (async () => {
      const dbConnect = dbo.getDb();
      dbConnect.collection("users")
        .updateOne({uid:req.uid}, operation, (err, result) => {
          if (err) {
            console.log('Successful put')
            res.status(400).send("Error finding user");
          } else {
            console.log('Failed put')
            res.status(202).send(`${name} updated`);
          }
        })
    })();
  })
  .delete(function (req, res) {
    res.send({ message: "delete" });
  });

module.exports = Router;
