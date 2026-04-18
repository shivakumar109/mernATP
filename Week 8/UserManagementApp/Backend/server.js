import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { UserApp } from './APIs/userApi.js';
import cors from 'cors'
//read environments
config();
//create http server
const app=exp()
//add cors
app.use(cors({
  origin:['http://localhost:5173']
}))
//add body parse middleware
app.use(exp.json());
//create database
const connectDb=async()=>{
     try{
     await connect(process.env.DB_URL);
     console.log("DB connection successful");
     app.listen(process.env.PORT,()=>console.log("server 4000 started"));
     }catch(err){
          console.log('Error in DB Connection ',err);
     }
}
connectDb();
//forward req to userapi if path starts with /user-api
app.use('/user-api', UserApp);
//add error handling  middleware
// app.use((err,req,res,next)=>{
//      res.json({message:"Error ",paylood:err.message})
// })
app.use((err, req, res, next) => {
  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  // Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format",
    });
    
  }
  // Duplicate key
  if (err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate field value",
    });
  }
  res.status(500).json({
    message: "Internal Server Error",
  });
});