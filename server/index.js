const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const Login = require('./Login');
const Signup = require('./Signup');
const Sendverification = require('./Sendverification');
const verify = require('./Verify');
const sendotp = require('./SendOtp');
const verifyotp = require('./VerifyOtp');
const  SendEmailVerify = require('./SendEmailVerify');
const verifyemailotp = require('./VerifyEmailOtp');
const SendLoginVerify = require('./SendLoginVerify');
const verifyloginotp = require('./VerifyLoginOtp');


  app.use(express.static(path.join(__dirname, '/client/build')));

  app.use(express.json());
  app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies to be sent with requests
    allowedHeaders: 'Content-Type, Authorization'
  }));


 
 
  app.use('/Signin', Signup);

  app.use('/Sendverification', Sendverification);

  app.use('/verify', verify);

  app.use('/Login', Login); 

  app.use('/send-otp', sendotp);

  app.use('/verify-otp', verifyotp);

app.use('/Send-EmailVerification', SendEmailVerify);

app.use('/verify-emailotp', verifyemailotp);

app.use('/Send-LoginVerification', SendLoginVerify);

app.use('/verify-loginotp', verifyloginotp);

// Catch-all handler for any requests that don't match any of the above routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Error handling middleware (optional, but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  //res.status(500).send('Something went wrong!');
});



  app.listen(5000, () => console.log('Server running on port 5000'));