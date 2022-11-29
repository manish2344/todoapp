const express = require('express');
require("dotenv").config();
const database = require("./DB/mongoose");
database()
const app = express();
const todolist = require("./router/Todo");
var cors = require('cors')
app.use(express.json());
app.use(cors()) 
app.use('/',todolist);
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});


