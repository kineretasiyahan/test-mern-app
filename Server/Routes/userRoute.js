const express=require('express');
const appRouter=express.Router()
const userRouter=require('../Controllers/userCtrl')

appRouter.get("/",userRouter.getUser);
appRouter.post("/",userRouter.createUser);

module.exports=appRouter;