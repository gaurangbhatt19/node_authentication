const express=require('express')
const app = express()
const bcrypt=require("bcrypt")
app.use(express.json())

var users=[]

app.get("/users",(req,res)=>{
let users=[{name:"Gaurang"}]
    res.json(users);
})

app.post("/users",async(req,res)=>{
    try{

        const salt =bcrypt.genSalt(20);
        const hashPassword=await bcrypt.hash(req.body.password,salt); 
        const user={
            name:req.body.name,
            password: hashPassword
        }
        console.log(hashPassword)
        
        users.push(user);
        res.status(201).send(users)
    }catch(e){
        res.status(500).send()
    }
   
})


app.listen(3030,()=>{
console.log("Server")
})