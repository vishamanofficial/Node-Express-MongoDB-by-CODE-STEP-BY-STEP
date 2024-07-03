const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

// app.post('/', async (req, res) => {
//     let data = await dbConnect();
//     let result = await data.insertMany(req.body);
//     res.send(result);
// });
// app.post('/', async (req, res) => {
//     let data = await dbConnect();
//     let documents = Array.isArray(req.body) ? req.body : [req.body];
//     let result = await data.insertMany(documents);
//     res.send(result);
// });




app.listen(3000, () => {
    console.log('server is running');
});