const express = require('express');
const empRouter = express.Router()
const {getEmp,deleteEmp, getSearch, updateEmp, cardApi,toggleStatus} = require('../controller/empController')
const {signup, login} =  require('../controller/AuthController')
// const connection =  require('../model/dbConnect')

// multer
let upload = require('../multer');
const { auth, isAdmin, getData } = require('../middleware/auth');



// routing

// empRouter.post('/empDetails',postEmp);
empRouter.post('/empDetails',signup);
empRouter.post('/login',login);


// empRouter.post('/abcd',auth,);
empRouter.get('/empDetails',getEmp);
empRouter.delete('/empDetails',deleteEmp);
empRouter.get('/empDetails/:emp_id',getSearch);
empRouter.put('/empDetails/:emp_id',updateEmp)
empRouter.get('/cards',cardApi);
empRouter.put('/status/:status/:emp_id',toggleStatus);

//admin
 // Only authenticated users with valid tokens can access this route
empRouter.get('/admin',auth,isAdmin,(req,res)=>{
  const email=req.email
  const id=req.id
  const role=req.role
  res.json({
    success:true,
    message:'Welcome to the protected route for Admin',
    email,id,role   
  })
 })
//  VineetKumar63

 empRouter.get('/verify', auth, getData)

module.exports = empRouter;