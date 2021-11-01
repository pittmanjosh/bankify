const admin = require('firebase-admin');
  
const type = process.env.GOOGLE_CERT_TYPE;
const project_id = process.env.GOOGLE_CERT_PROJECT_ID;
const private_key_id = process.env.GOOGLE_CERT_KEY_ID;
const private_key = process.env.GOOGLE_CERT_KEY.replace(/\\n/g,'\n');
const client_email = process.env.GOOGLE_CERT_EMAIL;
const client_id = process.env.GOOGLE_CERT_CLIENT_ID;
const auth_uri = process.env.GOOGLE_CERT_AUTH_URI;
const token_uri = process.env.GOOGLE_CERT_TOKEN_URI;
const auth_provider_x509_cert_url = process.env.GOOGLE_CERT_AUTH_CERT_URL;
const client_x509_cert_url = process.env.GOOGLE_CERT_CLIENT_CERT_URL;


var app = admin.initializeApp({
  credential: admin.credential.cert({
    type,
    project_id,
    private_key_id,
    private_key,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url
  })
});

if (app) {
  console.log("ADMIN Configured")
} else {
  throw new Error("ADMIN NOT CONFIGURED")
}

module.exports = app;