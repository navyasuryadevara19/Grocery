const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const CryptoJS = require("crypto-js");
var variables = require('./SendPasswordverify');

// Create MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Navya@123",
    database: "loginform"
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Use express.json() middleware to parse JSON bodies
router.use(express.json());

router.post('/', (req, res) => {
    const { newPassword } = req.body;
    const Email = variables.variable;

    console.log(`New Password: ${newPassword}, Email: ${Email}`);

    // Generate a salt
    const salt = CryptoJS.lib.WordArray.random(16).toString();
    const saltedPassword = salt + newPassword; // Add the salt to the provided password
    const hashedPassword = CryptoJS.SHA256(saltedPassword).toString(); // Hash the salted password

    const sql = 'UPDATE employee SET Password = ?, salt = ? WHERE Email = ?';
    connection.query(sql, [hashedPassword, salt, Email], (error, results) => {
      if (error) {
        console.error('Error updating password in MySQL:', error);
        res.status(500).json({ message: 'Failed to reset password.' });
      } else {
        console.log('Password updated successfully');
        res.status(200).json({ message: 'Password reset successful.' });
      }
    });
});

module.exports = router;


