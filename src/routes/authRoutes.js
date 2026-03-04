import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const result = await db.run(
      `INSERT INTO users (username, password) VALUES (?, ?)`,
      [username, hashedPassword]
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

router.post('/login', async(req,res) => {
     const { username, password } = req.body;

     try {
        const user = await db.get('SELECT * FROM users WHERE username = ?',[username])

        if(!user){
            return res.status(404).send({message: 'User not found here laa'})
        }

        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword){
            return res.status(401).send({message: 'HAHAHA WRONG PASSWORD~~~~~'})
        }

        console.log(user)
        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: '12h'})
        res.json({token})

     } catch (error) {
        console.log(error.message)
        res.sendStatus(503)
     }

})

export default router;