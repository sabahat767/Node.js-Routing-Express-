const express = require ('express')
const app =express();
const Path=require('path')
const bodyParser=require('body-parser')
const Port =4000;
app.use(bodyParser.urlencoded({extended:true}))
// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')//browser per ye response send krdo jahn ka path / (root ) ho
//   })//yahn root yani home page p html khud s dere ye lmba hojaega isi lye file bna krte
// app.get('/', (req, res) => {
// res.sendFile(Path.join(__dirname,'public','home.html'))
//   })
// app.get("/aboutus",(req,res)=>{
//       res.sendFile(Path.join(__dirname,'public','aboutus.html'))
//   })//file leni ho jb pori
//  app.get("/contactus",(req,res)=>{
//      res.sendFile(Path.join(__dirname,'public','contactus.html'))
//  }) hr e file ka route alg alg dena pra hai easy ye hai k ek line of code likho aese:
app.use(express.static(Path.join(__dirname,'public')))
//phle is public k folder ko static bnya coz yahn sare pages mojod hain
//app.use(express.static(Path.join(__dirname,'registration')))
app.get("/signup",(req,res)=>{
    res.sendFile(Path.join(__dirname,'registration','signup.html'))
})
app.post("/signup",(req,res)=>{
    res.send(req.body)
})
app.listen(Port,(req,res)=>{
    console.log('localHost:',Port)
})
