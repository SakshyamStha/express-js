import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', (req,res) => {
    const {name, email, password} = req.body;

    // hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // save the new user and hashed the password to the db
    try {
        const insertUser = db.prepare(`INSERT INTO users (name, email, password) VALUES (?,?,?)`)
        const result = insertUser.run(email, hashedPassword)

        
    } catch (err){
        console.log(err.message)
        res.sendStatus(503)
    }


    res.sendStatus(201);

})
router.post('/login', (req,res) => {

})

export default router;