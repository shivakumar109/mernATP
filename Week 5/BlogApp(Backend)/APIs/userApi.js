import exp from 'express'
import { register, authenticate} from '../Services/authService.js'
import { checkAuthor} from '../Middlewares/checkAuthor.js'
import { verifyToken } from '../Middlewares/verifyToken.js';
import { ArticleTypeModel } from '../Models/articleModel.js';
import { UserTypeModel } from '../Models/userModel.js';
export const userRoute=exp.Router();

//Register user
userRoute.post('/users',async(req,res)=>{
     //get user obj from req
     let userObj =req.body;
     //call register
     const newUserObj= await register({...userObj,role:"USER"});
     //send res
     res.status(201).json({message:"User Created",payloadd:newUserObj});
})
//Read all articals(protected )
userRoute.get('/article',verifyToken,async(req,res)=>{
     //find article
     let articles = await ArticleTypeModel.find();
     //if artical not found
     if(!articles){
          return res.status(400).json({message:"article not found"});
     }
     //send res
     return res.status(200).json({message:"article",payload:articles});
})
//add comment to the artical(procted )
userRoute.put('/articleComment',verifyToken,async(req,res)=>{
     let { userId,articleId,comment}=req.body;
     let article=await ArticleTypeModel.findById(articleId);
     if(!article){
          return res.status(400).json({message:"Article not found"});
     }
     let updatedArticle= await ArticleTypeModel.findByIdAndUpdate(articleId,{
          $push:{comments:{user:userId,comment:comment}}},
          {new:true})
     return res.status(200).json({message:"commented",payload:updatedArticle})
})
