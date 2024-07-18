const express = require('express');
const router = express.Router();
const SendPasswordOtp = require('./SendPasswordOtp');


router.post('/', async (req, res) => {
    const  Email  = req.body.Email;
    module.exports.variable = Email;
    await SendPasswordOtp(Email);
    res.json({ message: 'Verification email sent' });
  });

module.exports =router; 