const express = require('express');
const db = require('../database');

const router = express.Router();

router.post('/login', (req, res) => {
   const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
   db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) return res.json("Login Failed");
      if (data.length > 0) {
         return res.json('Login Successful');
      } else {
         return res.json('No Record');
      }
   });
});

module.exports = router;
