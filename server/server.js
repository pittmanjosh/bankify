const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const apiRouter = require("./routes/api.js");
const authRouter = require("./routes/auth.js");
const cors = require("cors");
const dbo = require("./db.js");
const backdoor = require('./routes/backdoor')

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/auth", authRouter);
app.use("/api", apiRouter);
app.use("/backdoor", backdoor);

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
