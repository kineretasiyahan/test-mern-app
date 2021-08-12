const dotenv = require('dotenv').config();
const cors=require('cors')
const express = require('express');
const app=express();
const userRouter=require('./Routes/userRoute')
const moongose = require('./DB/Index')
const path = require('path');
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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'../client/build','index.html'))
    })
}

