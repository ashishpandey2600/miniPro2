const express =require('express');
const path=require("path");
const app = express();
const hbs=require("hbs");
const port=process.env.port || 3000;  //jo bhi avalable port ho vo allot ho jaaye
// require('./db/conn');





    app.listen(port,()=>{
        console.log(`server is running at port no. ${port}`);
    }
    )