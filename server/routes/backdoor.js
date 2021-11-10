const express = require("express");
const Router = express.Router();
const dbo = require("../db.js");

Router.route("/").get((req, res) => {
  // Read, userInfo for all data
  (async () => {
    console.log("backdoor accessed-", new Date());
    const dbConnect = dbo.getDb();
    dbConnect
      .collection("users")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          res.status(200).send(result);
        }
      });
  })();
});

module.exports = Router;
