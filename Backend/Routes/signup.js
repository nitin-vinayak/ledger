const express = require('express');
const db = require('../database');

const router = express.Router();

router.post('/signup', (req, res) => {
    const { email, password } = req.body; 
    const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
    const values = [email, password];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        console.log('User successfully registered:', data);
        return res.status(201).json({ message: 'User registered successfully' });
    });
});


module.exports = router;