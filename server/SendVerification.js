const express = require('express');
const router = express.Router();
const sendVerificationEmail = require('./Email');

router.post('/', async (req, res) => {
    const  Email  = req.body.Email;
    await sendVerificationEmail(Email);
    res.json({ message: 'Verification email sent' });
  });

module.exports =router; 



