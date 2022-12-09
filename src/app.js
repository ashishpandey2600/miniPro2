const express =require('express');
const path=require("path");
const app = express();
const hbs=require("hbs");
const port=process.env.port || 3000;  //jo bhi avalable port ho vo allot ho jaaye
// require('./db/conn');
const static_path = path.join("__dirname")






app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.use(express.static(static_path))




    app.listen(port,()=>{
        console.log(`server is running at port no. ${port}`);
    }
    )