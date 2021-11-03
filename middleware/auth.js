const fbAdmin = require('../firebase/admin');

function authentication(req,res,next) {
  // read token from header
  const idToken = req.headers.authorization

  // verify token
  fbAdmin.auth().verifyIdToken(idToken)
    .then((x)=>{console.log("authenticated")})
    .catch((error)=>{
      console.log("error",error)
      res.status(401).send("Authentication failed")
    })
  
  next()
};

module.exports = authentication;