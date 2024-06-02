const express = require('express');
const router = express.Router();
const connection = require('./DBconnection');


router.post('/', (req, res) => {

    const Username = req.body.Username;
    const Email = req.body.Email;
    const Password = req.body.Password;
    const ConfirmPassword = req.body.ConfirmPassword;
    const salt = req.body.salt;
    console.log(Username, Email, Password);


    const sql = `INSERT INTO employee (Username, Email, Password, ConfirmPassword, salt) VALUES(?,?,?,?,?)`;


    connection.query(sql,[Username, Email, Password, ConfirmPassword, salt],(err, result) => {
        if(err){
          console.log("error occured");
        res.send(result);
    }else{
        res.send({message: "ENTER CORRECT ASKED DETAILS"});
        console.log("Data saved");
    }
    })
  })

module.exports = router;