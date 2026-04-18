import exp from 'express'
import { UserModel } from '../Models/userModel.js';

//create a min-express app
export const UserApp=exp.Router();
//user api route
//create user
UserApp.post('/user',async(req,res)=>{
     //get new user
     let newUser= req.body;
     //create user document
     let newUserDocument= new UserModel(newUser)
     //save user
     let userObj=await newUserDocument.save();
     //semd res
     res.status(201).json({message:"User Created",payload:userObj});
})
//read all users
UserApp.get('/users',async(req,res)=>{
     let users=await UserModel.find({status:true})
     //send res
     if(users.length===0){
          return res.status(400).json({message:"users not found"})
     }
     return res.status(200).json({message:"Users in data",payload:users})
})
//read a user by id
UserApp.get('/user/:id',async(req,res)=>{
     let uid = req.params.id
     let user = await UserModel.findById(uid)
     if(!user || user.status === false)
     {
          return res.status(404).json({message:"User Not Found"})
     }
     res.status(200).json({message:"User Details:-",payload: user})
})
//delete user by id
UserApp.delete("/user/:id",async(req,res)=>{
     let uid = req.params.id
     let user = await UserModel.findById(uid)
     if(!user || user.status === false)
     {
          return res.status(404).json({message:"User Not Found"})
     }
     await UserModel.findByIdAndUpdate(uid,{$set:{status:false}})
     res.status(200).json({message:"User Removed"})
})

//activation of user
UserApp.patch("/user/:id" ,async(req,res)=>{
     let uid=req.params.id;
     let user = await UserModel.findByIdAndUpdate(uid,{$set:{status:true}},{new:true})
     res.status(200).json({message:"user actived",payload:user})
})

