// //custom modules....
// // const add = require("./sum");
// //  let rs = add.add(1,3);
// //  let sub =add.subtract(5,2);
// // console.log(rs,sub)//4
// //core modules..
// const path = require('path');
// // console.log(path);
// // console.log("file naame:",path.basename(__filename));
// // console.log("dir name:",path.dirname(__filename));
// // console.log("ext name:",path.extname(__filename));
// // console.log("path name:",path.parse(__filename));
// // console.log(path.parse(__filename));
// // console.log(path.join(__dirname,'test.txt','script.js'));
// // fs module is used to read and write files in node js...
// const fs=require('fs')
// //write file
// fs.writeFile('test.txt','hello world',(err)=>{
//     if(err) throw err;
//     console.log('file created');
// })
// //read file
// fs.readFile('test.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })
// //append data into the existing file
// fs.appendFile('test.txt','\N MHDSULU786',(err)=>{
//     if(err) throw err;
//     console.log('data appended');
// })
// //DE;ETE
// fs.unlink('test1.txt',(err)=>{
//     if(err) throw err;
//     console.log('file deleted');
// })
///HTTP
const http = require('http');
http.createServer(function(req,res){
    res.write('it my world');
    console.log(req.url);
    res.end();
}).listen(8080,()=>{
    console.log('server running on port 8080')})


