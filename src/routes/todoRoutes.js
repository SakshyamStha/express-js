import express from 'express';
import db from '../db.js';

const router = express.Router();

// get all todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.all(
      'SELECT * FROM todos WHERE user_id = ?',
      [req.userId]
    );

    return res.json(todos);

  } catch (error) {
    console.log(error.message);
    return res.sendStatus(503);
  }
});

// create a new todo
router.post('/', (req,res) => {
    
})

// update a todo
router.put('/:id', (req,res) => {

})

// delete a todo
router.delete('/:id', (req,res) => {

})

export default router;