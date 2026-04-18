import { Schema,model } from "mongoose";
//create user schema with validations
const userSchema=new Schema({
     name:{
          type:String,
          required:[true,"name is required"]
     },
     email:{
          type:String,
          required:[true,"email is required"],
          unique:true
     },
     dateOfBirth:{
          type:Date,
          required:[true,"required DOB"]
     },
     mobileNumber:{
          type:Number,
     },
     //soft delete
     status:{
          type:Boolean,
          default:true,
     }
},
{
     timestamps:true,
     strict:"throw",
     versionKey:false
})
//create user model for user schema
export const UserModel = model("user",userSchema);