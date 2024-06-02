const express = require('express');
const router = express.Router();
const connection = require('./DBconnection');
const CryptoJS = require("crypto-js");


router.post('/', (req, res) => {

    const Email = req.body.Email;
    const Password = req.body.Password;

    const query = `SELECT * FROM employee WHERE (Email) = ?`;
    connection.query(query,[Email], (error, results) => {
      if (error) {
  
  
      }
      if (results.length > 0) {
          //return res.status(400).json({ error: 'Email already has an account' });
  
          const hashedPassword = results[0].Password;
          const salt = results[0].salt;
          const saltedPassword = salt + Password; // Add the salt to the provided password
    const encryptedPassword = CryptoJS.SHA256(saltedPassword).toString(); // Hash the salted password
    const isPasswordMatch = encryptedPassword === hashedPassword;

          if (isPasswordMatch) {
            console.log('Login successful!');
            return res.status(200).json({ message: 'Successfully Logging In' });
  
  
  
          } else {
            console.log('Invalid UserName or Password');
            return res.status(600).json({ error: 'Invalid email or password' });
  
          }
        }
        else{
          console.log('Invalid email or password');
         return res.status(400).json({ error: 'Invalid email or password' });
  
        }
  })
    

  })
module.exports = router;