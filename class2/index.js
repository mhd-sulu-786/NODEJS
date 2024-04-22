const express= require('express'); //imp[orted express]
const app=express()//initaalizing express]
const port =786;

// //middile wire 
// const cores = require('cors');
// app.use(cores());
// //or jsonn fle middle wire 
// app.use(express.json());
//http methods = get,post,put,delete
app.get('/',(req,res)=>{
    res.send("hello world")
})


//run port

app.listen(port,()=>{console.log("server is running",port)});
