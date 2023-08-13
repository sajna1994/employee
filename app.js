const express=require('express')
const mongoose =require('mongoose')
const morgan = require('morgan')
const cors =require('cors')
const app=express();
const jwt =require("jsonwebtoken");
require('dotenv').config();
app.use(morgan("dev"));
app.use(cors());
require("./db/mongodb");
// for check
const path = require('path'); 
app.use(express.static(path.join(__dirname,'/build')));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

 app.use((req, res, next) => {
     res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type ");
     res.setHeader("Access-Control-Allow-Credentials", true);
     next();
 })
const user=require('./routes/userRoute');

app.use('/api',user)
const admin=require('./routes/adminRoute');

app.use('/api',admin)
const PORT = 5000;
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname,'/build/index.html'));
});
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
