const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const apiRouter = require("./routes/api.js");
const cors = require("cors");
const dbo = require("./db.js");
const fbAdmin = require('../firebase/admin');

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// app.use("/graphql", graphql(
//   {
//     schema,
//     graphiql: (process.env.NODE_ENV === "development") || false,
//   }
// ));

app.use("/api", apiRouter);

app.get("/list", (req, res) => {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

// All other GET requests not handled before will return our React app
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  res.location("back");
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
