const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const connection = require('./DBconnection');

router.get('/', async (req, res) => {
    const token = req.query.token;
    try {
      const decodedToken = jwt.verify(token, 'mySecretKey');
      const Email = decodedToken.Email;

      // update the is_verified field in the database
      const sql = `UPDATE user SET is_verified = true WHERE Email = ?`;
      connection.query(sql, [Email], (err, result) => {
        if (err) {
          console.error('Error updating user data:', err);
          return res.send({ error: 'Error updating user data' });
        }
        console.log('User data updated successfully:', result);
        res.redirect('http://localhost:3000/VerifyEmail');

      });
    } catch (err) {
      console.error('Error verifying email:', err);
      return res.send({ error: 'Error verifying email' });
    }

  });

  module.exports = router;

