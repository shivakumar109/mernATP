import exp from "express"
//create a mini -express
export const userApp=exp.Router()

let users=[];
//create API (req handling routes)

     //get req handling rout(Read mode)
     userApp.get('/user/',(req,res)=>{
          //send user data in res
          res.status(200).json({message:"users data",payload:users}); //message,playload
          
     })
     
     //post req handling rout(create user)
     userApp.post('/user',(req,res)=>{
          //egt user resource from req
          let reqbody=req.body;
          //console.log(reqbody);
          users.push(reqbody);
          res.status(201).json({message:"user created",payload:reqbody});
     })
     
     //put req handling rout(update user)
     userApp.put('/user/:id',(req,res)=>{
          //get modified user from req
          let modifieduser=req.body;
          //find the user with the id exisits in array
          //if user found ,send req as 'user not found'
          let idx=users.findIndex(userobj=>userobj.id===modifieduser.id);
          //if user found,then modify the user
          if(idx===-1){
               return res.status(404).json({message:"user not found"});
          }
          let deleteduser=users.splice(idx,1,modifieduser);
          //user res as 'user modefied'
          return res.status(201).json({message:"usermodied"});
     })

     userApp.get("/user/:id",(req,res)=>{
          req.params; //{id:1}
          //read id from url
          let userid=Number(req.params.id);
          //read user by this id
          let user=users.find(userobj=>userobj.id===userid);
          if(!user){
               return res.status(404).json({message:"user not found"});
          }
          //send res
          res.status(200).json({message:"user found",payload:user});
          
     })

     //delete req handling rout(delete user)
     userApp.delete('/user/:id',(req,res)=>{
          //read user
          let deleteuser=req.body;
          //find index
          let index=users.findIndex(usersObj=>usersObj.id===deleteuser.id)
          //if not found
          if(index===-1){
               return res.status(404).json({message:"user not found"});
          }
          //if found
          let deletedUser=users.splice(index,1)
          return res.status(201).json({message:"user deleted",payload:deletedUser})

     })
