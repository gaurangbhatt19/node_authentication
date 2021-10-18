const express=require('express')
const app = express()
app.use(express.json())
var users=[]
app.get("/users",(req,res)=>{
let users=[{name:"Gaurang"}]
    res.json(users);
})

app.post("/users",(req,res)=>{
    let user={name:req.body.name,password:req.body.password}
    users.push(user);
    res.send(users)
})


app.listen(3030,()=>{
console.log("Server")
})