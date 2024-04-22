let data =[{
    NAME: "Muhammedsulaiman.T",
    Age:19,
    Gender:"Male",
    Country:"India"
},
{
    USERNAME:"mhd_sulu_786",
    PASSWORD:"passwrod786insta"
}]
const express = require('express');
const app = express();
app.get('/getdatas',(req,res)=>{
    try {
        res.send(data);
        console.log(data);
        
    } catch (error) {
        console.log(data);
        
    }
}).listen(7000,()=>{
    console.log("server is running");
})