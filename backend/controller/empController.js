const connection = require('../model/dbConnect')
const nodemailer = require('nodemailer')

// get
const getEmp = async (req,res)=>{
  try{
    let userData = req.body;
    let sqlQuery = "SELECT * from emp_details; ";

    await connection.query(sqlQuery,userData,(err,result)=>{
      if(err){
        console.log("Error:",err.sqlMessage);
      }else{
        res.json(result);
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
}

// get with search
const getSearch = async (req,res)=>{
  try{
    // let userData = req.body.query;
    let emp_id = req.params.emp_id
    let sqlQuery = 'SELECT * FROM emp_details where emp_id = ?';
    await connection.query(sqlQuery,[emp_id],function(err,result){
      if(err){
        console.log("Error:",err.sqlMessage);
      }else{
        res.json(result);
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
    
  
}


// post 
const postEmp = async (req, res) => {
  let recieverMail = req.body.email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
     // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "lodhigaurav23@gmail.com",
      pass: "clhk vmcf xohk smwy",
    },
  });
   const info = await transporter.sendMail({
     from: '"Maddison Foo Koch 👻" <lodhigaurav23@gmail.com>', // sender address
     to: recieverMail,   // particular email address bhi likh skte hai
     subject:"Hello ",  // subject line  // jo name title se ja raha hai
     text: "Hello world?", // plain text body ///jo massage hai actual
         // html: "<b>Hello world?</b>", // html body
        });


   

  try {
    let userData = req.body;
    let sqlQuery = 'INSERT INTO emp_details SET ?';
    await connection.query(sqlQuery, [userData], function (err, result) {
      if (err) {
        console.log('error:', err.sqlMessage);
      } else {
        res.send(result)
      }
    })
  } catch (error) {
    res.send(error.sqlMessage)
  }
}

// delete 

const deleteEmp = async(req,res)=>{
  try{
    let emp_id =  req.query.emp_id;
    let sqlQuery = 'DELETE FROM emp_details WHERE emp_id = ?';
   await connection.query(sqlQuery,[emp_id],(err,result)=>{
      if(err){
        console.log("Error:",err.sqlMessage);
      }else{
        res.json(result);
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
}

// put  
const updateEmp = async(req,res)=>{
  try{
    let emp_id = req.params.emp_id;
       let {emp_name,password,department,email,hire_date,phone_no,salary} = req.body
    let sqlQuery = 'Update emp_details Set emp_name=?,password=?,department=?,email=?,hire_date,phone=?,salary=? where emp_id=?  ';
    await connection.query(sqlQuery,[emp_name,password,department,email,hire_date,phone_no,salary,emp_id],(err,result)=>{
      if(err){
        console.log("Error:",err.sqlMessage);
      }else{
        res.json(result);
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
}

// cards api 

const cardApi =  async (req,res)=>{
  let data =  req.body
  let sqlQuery =  'SELECT (SELECT COUNT(*) FROM emp_details) as emp_rows, (select sum(salary) from emp_details as totalSalary) ';
  await connection.query(sqlQuery,[data],(err,result)=>{
    if(err){
      console.log('Error',err.sqlMessage);
    }else{
      res.send(result);
    }
  })
}



module.exports = { postEmp,getEmp,deleteEmp,getSearch,updateEmp,cardApi }
