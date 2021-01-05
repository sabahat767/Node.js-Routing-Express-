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
let users=[
    {name:"Faiza",id:1,email:'faz.pak@gmail.com',password:'111'},
    {name:"Abeer",id:1,email:'abeer.pak@gmail.com',password:'123'}
]
app.get("/signup",(req,res)=>{
    res.sendFile(Path.join(__dirname,'registration','signup.html'))
})
app.post("/signup",(req,res)=>{
    //res.send(req.body)
    let {email, name, password} = req.body //destructure object
    let found = users.some((item)=>item.email == email)
    if(found){
        res.send('<h1>User already existed</h1>')
    } else{
        users.push({name,email,password,id:users.length+1})
       // res.send('user added')
      // res.sendFile(Path.join(__dirname, 'registration','signin.html'))
      res.redirect('/signin')
    }
})
app.get("/signin",(req,res)=>{
    res.sendFile(Path.join(__dirname,'registration','signin.html'))
})
app.post("/signin",(req,res)=>{
    let {email,password}=req.body
    let found = users.some((item)=>item.email == email && item.password==password)
    if(found){
       // res.send('<h1>Welcome</h1>')
    // res.sendFile(Path.join(__dirname, 'public','index.html'))
res.redirect('/')
     } else{
      
        res.sendFile(Path.join(__dirname, 'registration','signin.html'))
    }
})
app.listen(Port,(req,res)=>{
    console.log('localHost:',Port)
})
