const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const connection = require('./DBconnection');

// Email verification

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'navyasuryadevara99@gmail.com',
      pass: 'pdio arfb pbag xemg', // Ensure this is an App Password, not your regular email password
    },
});

const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

let StoredOtp = null;

const SendEmailOtp = async (Email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key

    const otp = generateOtp();

StoredOtp = otp; // Store OTP in memory, in a real app use a database
  console.log("your otp is " + StoredOtp);
  module.exports.variable = StoredOtp;
  console.log(otp);


    const mailOptions = {
      from: 'navyasuryadevara99@gmail.com',
      to: Email,
      subject: 'Verify your email address',
      html: `<p>verify your email with Otp:${otp}</p>`

    };

  
    await transporter.sendMail(mailOptions);
};

module.exports = SendEmailOtp;
