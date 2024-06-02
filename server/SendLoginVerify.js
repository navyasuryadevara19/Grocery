const express = require('express');
const router = express.Router();
const SendLoginOtp = require('./SendLoginOtp');


router.post('/', async (req, res) => {
    const  Email  = req.body.Email;
    await SendLoginOtp(Email);
    res.json({ message: 'Verification email sent' });
  });



module.exports =router; 