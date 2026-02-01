import exp from 'express';
import { UserModel } from "../Models/user_model.js"
//create user router
export const userApp=exp.Router()
//user api routes

//create user
userApp.post('/user',async(req,res)=>{
     //get  newuser from req
     let newUser=req.body;
     //create a new user document
     let newUserDoc=new UserModel(newUser)
     //save in database
     await newUserDoc.save()
     //send response
     res.status(200).json({message:"user created",newUserDoc})
})

//read user
userApp.get('/user',async(req,res)=>{
     //read user from db
     let users=await UserModel.find()
     //send res
     res.status(200).json({message:"Users in database",users})
})

//read user by id 
userApp.get('/user/:id',async(req,res)=>{
     //get ObjId 
     let objId= req.params.id;
     //find user id
     let userObj=await UserModel.findById(objId);
     //send res
     res.status(200).json({message:"reading user by id",userObj})
})

//update user by id
userApp.put('/user/:id',async(req,res)=>{
     //get id
     let objId=req.params.id;
     //get modified user from req
     let modifiedUser=req.body;
     //make update
     let latestUser=await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new: true,runValidators:true});
     //send req
     res.status(200).json({message : "user Modified",payload: latestUser} );

})

//delete user
userApp.delete('/user/:id',async(req,res)=>{
     //get user id
     let objId=req.params.id;
     //delete user by id
     let deletedUser=await UserModel.findByIdAndDelete(objId)
     res.status(200).json({message:"User deleted",payload:deletedUser})
})