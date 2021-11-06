const fbAdmin = require('../firebase/admin');

function authentication(req,res,next) {
  // read token from header
  const idToken = req.headers.authorization?.split(' ')[1] || null;
  
  if (idToken) {
    fbAdmin.auth().verifyIdToken(idToken)
    .then((decodedToken)=>{
      const {uid, email, name} = decodedToken;
      req.uid = uid;
      req.email = email;
      req.name = name;
      console.log("Authorized User:",uid)
      next();
    })
    .catch(()=>{
      res.status(401).send("Authentication failed")
    })
  } else {
    res.status(401).send("Missing idToken")
  }
  // verify token
  
  fbAdmin.auth().verifyIdToken(idToken)
    .then((decodedToken)=>{
      const {uid, email, name, photoURL} = decodedToken;
      req.uid = uid;
      req.email = email;
      req.name = name;
      req.photoURL = photoURL;
      console.log("Authorized User:",uid)
      next();
    })
    .catch(()=>{
      res.status(401).send("Authentication failed")
    })
};

module.exports = authentication;