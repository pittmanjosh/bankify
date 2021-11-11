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
Router.use(express.urlencoded({extended:true}));
Router.route("/")
  .get(function (req, res) {
    // return user balance
    (async () => {
      const dbConnect = dbo.getDb();

      dbConnect.collection("users")
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
      name: req.name || req.body.name,
      email: req.email,
      photoURL: req.photoURL || req.body.picture,
      checking: "0",
      savings: "0",
    };

    (async () => {
      const dbConnect = dbo.getDb();
      dbConnect.collection("users").insertOne(newUser, (err, result) => {
        if (err) {
          res.status(400).send("Error adding user");
        } else {
          res.send(`${req.name} created`);
        }
      });
    })();
  })
  .put(function (req, res) {
    const account = req.body.account;
    const amount = req.body.amount;
    if (!account || !amount) {
      res.status(400).send("Missing parameters");
    } 

    console.log("account:",account,", amount:",amount);

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
            res.status(400).send("Error finding user");
          } else {
            res.status(202).send(`${name} updated`);
          }
        })
    })();
  })
  .delete(function (req, res) {
    res.send({ message: "delete" });
  });

module.exports = Router;
