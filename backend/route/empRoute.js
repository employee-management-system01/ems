const express = require('express');
const empRouter = express.Router()
const {getEmp,deleteEmp, getSearch, updateEmp, cardApi,toggleStatus, getSearch2, attendance, check_out, getAttendance, getAdminProfile, uploadfile,} = require('../controller/empController')
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
empRouter.get('/empDetails_search/:emp_name',getSearch2);
empRouter.put('/empDetails/:emp_id',updateEmp)
empRouter.get('/cards',cardApi);
empRouter.put('/status/:status/:emp_id',toggleStatus);

empRouter.post('/attendance',attendance)
empRouter.patch('/api/check_out/:email',check_out)
empRouter.get('/getAttendance',getAttendance)
empRouter.patch('/upload_admin/:emp_id',upload.single('photo'),uploadfile)

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

 empRouter.get('/logout',(req,res)=>{
  res.clearCookie('token');
  return res.json({message :'Success'})
 })

 empRouter.get('/verify', auth, getData)
 empRouter.get('/adminProfile', getAdminProfile)

module.exports = empRouter;