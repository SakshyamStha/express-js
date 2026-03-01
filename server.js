const express = require('express');
const app = express();
const PORT = 3000;

let data = {
    message: 'Hello data!',
    timestamp: new Date()
};

// website endpoints
app.get('/', (req,res)=>{
    // res.sendStatus(200);
    res.json({ message: 'Hello Home!',
          requestMethod: req.method });
})
app.get('/dashboard', (req,res)=>{
    // res.sendStatus(200);
    res.json({ message: 'Hello Dashboard!',
          requestMethod: req.method });
})


// api endpoints
app.get('/api/data', (req,res) => {
    res.json({ data: data,
          requestMethod: req.method });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});