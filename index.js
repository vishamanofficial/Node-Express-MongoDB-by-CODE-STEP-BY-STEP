// const http = require('http');
// const data = require('./data');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3000);

// input from console , create, delete file

// const fs = require('fs');
// const input = process.argv;
// if (input[2]=='add')
// {
//     fs.writeFileSync(input[3], input[4]);
// }
// else if (input[2]=='remove')
// {
//     fs.unlinkSync(input[3]);
// }
// else
// {
//     console.log('invalid input');
// }

// creating mul files in folde

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// for (i=1;i<=5;i++){
//     fs.writeFileSync(path.join(dirPath, `/file${i}.txt`), `file${i}`);
// }
// const readdir = (dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log(item);
//     })
// })

// const express = require("express");
// const app = express();
// app.get('',(req,res)=>{
//     res.send("AMAN");
// });
// app.get('/about',(req,res)=>{
//     res.send("<h1>Monika</h1>");
// });

// app.listen(3000);

// const express = require("express");
// const path = require("path");
// const app = express();
// const publicPath = path.join(__dirname, "public");
// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`);
// });
// app.get('/about',(req,res)=>{
//     res.sendFile(`${publicPath}/about.html`);
// });
// app.get('/help',(req,res)=>{
//     res.sendFile(`${publicPath}/help.html`);
// });
// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/404.html`);
// });
// app.listen(3000);



const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.join(__dirname, "public");

app.set('view engine', 'ejs');
app.get('',(req,res)=>{
    res.render('profile');
});
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
});
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`);
});
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404.html`);
});
app.listen(3000);

// application level middleware

// const express = require("express");
// const app = express();

// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("please provide aeg");
//   } else {
//     next();
//   }
// };
// app.use(reqFilter);

// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });
// app.get("/users", (req, res) => {
//   res.send("Welcome to users page");
// });
// app.listen(3000);

// route level middleware

// const express = require("express");
// const app = express();

// const reqFilter = (req, res, next) => {
//   if (!req.query.age) {
//     res.send("please provide aeg");
//   } else {
//     next();
//   }
// };
// // app.use(reqFilter);
// app.get("/", (req, res) => {
//   res.send("Welcome to home page");
// });
// app.get("/users", reqFilter, (req, res) => {
//   res.send("Welcome to users page");
// });
// route.get("/about", (req, res) => {
//   res.send("Welcome to about page");
// });
// route.get("/contact", (req, res) => {
//   res.send("Welcome to about page");
// });
// app.use("/", route);
// app.listen(3000);

// 30

// const { MongoClient } = require("mongodb");
// const url = 'mongodb://localhost:27017'; // corrected the typo here
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }
// getData();

// 31

// const { MongoClient } = require("mongodb");
// const url = 'mongodb://localhost:27017'; // corrected the typo here
// const database = 'e-comm';
// const client = new MongoClient(url);

// async function dbConnect() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');
// }

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((products)=>{
//         console.log(products);
//     })
// })

// const dbConnect = require('./mongodb');

// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();

// 39

// const mongoose = require("mongoose");

// const main = async () => {
//   await mongoose.connect("mongodb://localhost:27017/e-comm");

//   const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String
//   });

//   const ProductsModel = mongoose.model("products", ProductSchema);

//   let data = new ProductsModel({
//     name: "shirt1",
//     price: 100,
//     brand: "nike",
//     category: "shirt"
//   });

//   let result = await data.save();
// };

// main();
