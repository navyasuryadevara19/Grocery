const express = require('express');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const connection = require('./DBconnection');

// Email verification

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: 'navyasuryadevara99@gmail.com',
      pass: 'pdio arfb pbag xemg', // Ensure this is an App Password, not your regular email password
    },
});

const sendVerificationEmail = async (Email) => {
    const secretKey = 'mySecretKey'; // Replace with your actual secret key
    const token = jwt.sign({ Email }, secretKey, { expiresIn: '1h' });
    const verificationUrl = `http://localhost:5000/verify?token=${token}`;
     
    // Save the token to the database
    const sql = `INSERT INTO user (Email, Token) VALUES(?, ?)`;
    connection.query(sql, [Email, token], (err) => {
      if (err) {
        console.error('Error saving user data:', err);
      }
      console.log('User data saved successfully:');
    });
  
    const mailOptions = {
      from: 'navyasuryadevara99@gmail.com',
      to: Email,
      subject: 'Verify your email address',
      html: `<p>Please click on the following link to verify your email address:</p>
             <a href="${verificationUrl}">${verificationUrl}</a>`,
    };
  
    await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;
