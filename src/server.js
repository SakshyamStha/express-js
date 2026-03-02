// const express = require('express');

// const app = express();
// const PORT = 3000;

// let data = [ 'Ram', 'Shyam', 'Hari' ];

// // middleware
// app.use(express.json());  // for parsing application/json

// // website endpoints
// app.get('/', (req,res)=>{
//     // res.sendStatus(200);
//     // res.json({ message: 'Hello Home!',
//     //       requestMethod: req.method });
//     res.send(`
//         <body>
//         <h1>Data</h1>
//             <p>
//                 ${JSON.stringify(data)}
//             </p>
//         </body>
//         `);
// })
// app.get('/dashboard', (req,res)=>{
//     // res.sendStatus(200);
//     res.json({ message: 'Hello Dashboard!',
//           requestMethod: req.method });
// })


// //  CRUD operations
// //  crud-method:  Create- Post. Read- Get, Update- Put. Delete- delete

// // api endpoints
// app.get('/api/data', (req,res) => {
//     res.json({ data: data,
//           requestMethod: req.method });
// })

// app.post('/api/data', (req,res) => {
//     const newEntry = req.body;  // a payload body from frontend
//     data.push(newEntry.name);
//     res.status(201);
// })


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// MODERN WAY OF SETTING UP SERVER.JS

import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// get the file path from the url of the current mkodule
const __filename = fileURLToPath(import.meta.url);

// get the directory name from the file path
const __dirname = dirname(__filename);

// for serving static files from the public folder
app.use(express.static(path.join(__dirname, '../public')));  

// serving thee html file from the pubic folder
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})