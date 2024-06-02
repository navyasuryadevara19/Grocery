const express = require('express');
const router = express.Router();
const SendEmailOtp = require('./SendEmailOtp');


router.post('/', async (req, res) => {
    const  Email  = req.body.Email;
    await SendEmailOtp(Email);
    res.json({ message: 'Verification email sent' });
  });



module.exports =router; 