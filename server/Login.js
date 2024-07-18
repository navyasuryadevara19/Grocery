const express = require('express');
const router = express.Router();
const connection = require('./DBconnection');
const CryptoJS = require("crypto-js");

router.post('/', (req, res) => {
    const { Email, Password } = req.body;
    const query = `SELECT * FROM employee INNER JOIN user ON employee.Email = user.Email WHERE employee.Email = ?`;

    connection.query(query, [Email], (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length > 0) {
            const user = results[0];

            if (!user.is_verified) {
                return res.status(401).json({ error: 'Email not verified. Please verify your email before logging in.' });
            }

            const hashedPassword = user.Password;
            const salt = user.salt;
            const saltedPassword = salt + Password; // Add the salt to the provided password
            const encryptedPassword = CryptoJS.SHA256(saltedPassword).toString(); // Hash the salted password
            const isPasswordMatch = encryptedPassword === hashedPassword;

            if (isPasswordMatch) {
                console.log('Login successful!');

                const insertQuery = `INSERT INTO login_update (Email, login_time) VALUES (?, CURRENT_TIMESTAMP) ON DUPLICATE KEY UPDATE login_time = CURRENT_TIMESTAMP`;
                connection.query(insertQuery, [Email], (insertError) => {
                    if (insertError) {
                        console.error('Error inserting login time:', insertError);
                        return res.status(500).json({ error: 'Failed to insert login time.' });
                    }
                    console.log('Login time inserted successfully.');
                    return res.status(200).json({ message: 'Successfully Logging In' });
                });
            } else {
                console.log('Invalid UserName or Password');
                return res.status(400).json({ error: 'Invalid email or password' });
            }
        } else {
            console.log('Invalid email or password');
            return res.status(400).json({ error: 'Invalid email or password' });
        }
    });
});

module.exports = router;





