const { MongoClient } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();
const client = new MongoClient(process.env.REACT_APP_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("capstone");
      dbConnection.createIndex({email : 1},{unique : true});
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};