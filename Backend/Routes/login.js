const express = require('express');
const db = require('../database');

const router = express.Router();

router.post('/login', (req, res) => {
   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
   db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) {
         return res.status(500).json({ message: 'Internal Server Error' }); 
      }
      if (data.length > 0) {
         return res.status(200).json({ message: 'Login Successful' }); 
      } else {
         return res.status(401).json({ message: 'No Record' }); 
      }
   });
});

module.exports = router;