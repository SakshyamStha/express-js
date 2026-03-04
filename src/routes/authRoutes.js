import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const result = await db.run(
      `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
      [name, email, hashedPassword]
    );

    const token = jwt.sign(
      { id: result.lastID },
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    return res.status(201).json({ token });

  } catch (err) {
    console.log(err.message);
    return res.sendStatus(503);
  }
});

router.post('/login', (req,res) => {

})

export default router;