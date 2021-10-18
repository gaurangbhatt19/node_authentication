const express=require('express')
const app = express()
const bcrypt=require("bcrypt")
app.use(express.json())

var users=[]

app.get("/users",(req,res)=>{
let users=[{name:"Gaurang"}]
    res.json(users);
})

app.post("/users",async (req,res)=>{
    
   try{
        const salt = await bcrypt.genSalt(10)
        console.log(salt)
        let password=req.body.password
        const hashPassword=await bcrypt.hash(password,salt); 
        const user={
            name:req.body.name,
            password: hashPassword
        }
        console.log(hashPassword)
        
        users.push(user);
        res.status(201).send(users)
    }
    catch(err){
res.status(500).send(err)
    }
    
})

app.post("/users/login",async(req,res)=>{
    const userHash= users.find(user=> user.name==req.body.name)
    if(userHash==null){
    res.status(400).send()
    }else{
      
     if(await bcrypt.compare(req.body.password,userHash.password)){
         res.send("Success")
     }else{
         res.send("Fail")
     }
    }
})


app.listen(3030,()=>{
console.log("Server")
})