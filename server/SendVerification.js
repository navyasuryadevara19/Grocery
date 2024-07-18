const express = require('express');
const router = express.Router();
const sendVerificationEmail = require('./Email');

router.post('/', async (req, res) => {
    const  Email  = req.body.Email;
   try {
      await sendVerificationEmail(Email);
      res.status(200).json({ message: 'Signup successful, verification email sent' });
      console.log('email send successfully');
  } catch (emailErr) {
      console.log('Error sending verification email:', emailErr);
      //res.status(500).json({ message: 'Error sending verification email' });
    }
 });

module.exports =router; 



