const express = require('express');
const router = express.Router();
const connection = require('./DBconnection');


router.post('/', (req, res) => {

    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const salt = req.body.salt;
    const joining_date = new Date(); 
    console.log(Username, Email, Password);
 // Query to check if the email already exists
 const checkEmailSql = 'SELECT * FROM employee WHERE Email = ?';

 connection.query(checkEmailSql, [Email], (err, result) => {
     if (err) {
         console.log("Error occurred while checking email:", err);
        // return res.status(500).json({ error: 'Internal server error' });
     }

     if (result.length > 0) {
         return res.status(400).json({ error: 'Email already has an account' });
         
     }

     //console.log('Email already has an account');


     // If email does not exist, proceed to insert the new record
    const sql = `INSERT INTO employee (Username, Email, Password, salt, joining_date) VALUES(?,?,?,?,?)`;


    connection.query(sql,[Username, Email, Password, salt, joining_date],(err, result) => {
   
        if(err){
          console.log("error occured"); 
        res.send(result);
    }else{
        res.send({message: "ENTER CORRECT ASKED DETAILS"});
        console.log("Data saved");
        
    }
    })
  })
})

module.exports = router;