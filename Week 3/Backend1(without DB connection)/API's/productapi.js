import exp from'express';
//create mini express
export let productApp=exp.Router();

let products=[]
//create APIs
//get product details
productApp.get('/product',(req,res)=>{

     res.status(201).json({message:'product details',payload:products})

})
//get product by id
productApp.get('/product/:id',(req,res)=>{
     let productid=Number(req.params.id);
     let product=products.find(productobj=>productobj.id===productid);
     if(!product){
          return res.status(404).json({message:"product not found"});
     }
     res.status(200).json({message:"product found",payload:product});

})
//create product
productApp.post('/product',(req,res)=>{
     //get product from req
     let productreq=req.body;
     //push into products array
     products.push(productreq);
     res.status(201).json({message:'product data',payload:productreq})

})
//update product
productApp.put('/product/:id',(req,res)=>{
     //get modified product from req
     let modifiedproduct=req.body;
     //find the product with the id exisits in array
     //if product not found ,send req as 'product not found'
     let idx=products.findIndex(productobj=>productobj.id===modifiedproduct.id);
     if(idx===-1){
          return res.status(404).json({message:"product not found"});
     }
     //if product found,then modify the product
     let deletedproduct=products.splice(idx,1,modifiedproduct);
     return res.status(201).json({message:"product modified",payload:modifiedproduct});
})
//delete product
productApp.delete('/product/:id',(req,res)=>{
     let deleteproduct=req.body;
     //find index
     let index=products.findIndex(productObj=>productObj.id===deleteproduct.id)
     //if not found send res
     if(index===-1){
          return res.status(404).json({message:"productnot found"});
     }
     //if found delete
     let deletedproduct=products.splice(index,1)
     return res.status(201).json({message:"product deleted",payload:deletedproduct})

})