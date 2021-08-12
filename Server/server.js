const dotenv = require('dotenv').config();
const cors=require('cors')
const express = require('express');
const app=express();
const userRouter=require('./Routes/userRoute')
const moongose = require('./DB/Index')
const PORT=process.env.PORT;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/',(req,res)=>{
res.send("Hello server")
})

app.listen(PORT,(error)=>{
    if(error) throw error;
    console.log("sucsses");
})

app.use('/user',userRouter)

