const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const apiRouter = require('./routes/api.js');
const cors = require('cors');
const dbo = require("./db.js");
dotenv.config();


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/api', apiRouter)

// app.get('/list', (req, res) => {
//   const dbConnect = dbo.getDb();

//   dbConnect
//     .collection("users")
//     .find({}).limit(50)
//     .toArray(function (err, result) {
//       if (err) {
//         res.status(400).send("Error fetching listings!");
//      } else {
//         res.json(result);
//       }
//     });
// });

// All other GET requests not handled before will return our React app
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  res.location('back')
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});