const express = require('express');
const app = express();
const PORT = 3000;

let data = [ 'Ram', 'Shyam', 'Hari' ];

// middleware
app.use(express.json());  // for parsing application/json

// website endpoints
app.get('/', (req,res)=>{
    // res.sendStatus(200);
    // res.json({ message: 'Hello Home!',
    //       requestMethod: req.method });
    res.send(`
        <body>
        <h1>Data</h1>
            <p>
                ${JSON.stringify(data)}
            </p>
        </body>
        `);
})
app.get('/dashboard', (req,res)=>{
    // res.sendStatus(200);
    res.json({ message: 'Hello Dashboard!',
          requestMethod: req.method });
})


//  CRUD operations
//  crud-method:  Create- Post. Read- Get, Update- Put. Delete- delete

// api endpoints
app.get('/api/data', (req,res) => {
    res.json({ data: data,
          requestMethod: req.method });
})

app.post('/api/data', (req,res) => {
    const newEntry = req.body;  // a payload body from frontend
    data.push(newEntry.name);
    res.status(201);
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});