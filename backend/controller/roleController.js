const connection = require('../model/dbConnect')

// get
const getRole = async (req,res)=>{
  try{
    let roleData = req.body;
    let sqlQuery = 'SELECT * FROM roles';
    await connection.query(sqlQuery,roleData,(err,result)=>{
      if(err){
        console.log('Error:',err.sqlMessage);
      }else{
        res.send(result);
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
}

//post
const postRole = async (req,res)=>{
  try{
    let roleData = req.body;
    let sqlQuery = 'INSERT INTO roles SET ?';
    await connection.query(sqlQuery,[roleData],(err,result)=>{
      if(err){
        console.log('Error:',err.sqlMessage);
      }else{
        res.send(result);
        console.log('data post sucessfully');
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
}

//delete
const deleteRole = async(req,res)=>{
  try{
    let role_id =  req.params.role_id;
    let sqlQuery = 'DELETE FROM roles WHERE role_id = ?';
   await connection.query(sqlQuery,[role_id],(err,result)=>{
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

// role assign get
const roleAssign = async (req,res)=>{
  try{
    let emp_id = req.params.emp_id;
    let sqlQuery = 'select emp_id,role_id,role_name from role_ass natural join roles where emp_id = ?';
    await connection.query(sqlQuery,emp_id,(err,result)=>{
      if(err){
        console.log('Error:',err.sqlMessage);
      }else{
        res.send(result);
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
}

//role assign post
const AssRole = async (req,res)=>{
  try{
    let roleData = req.body;
    let sqlQuery = 'INSERT INTO role_ass SET ?';
    await connection.query(sqlQuery,[roleData],(err,result)=>{
      if(err){
        console.log('Error:',err.sqlMessage);
      }else{
        res.send(result);
        console.log('data post sucessfully');
      }
    })
  }catch(error){
    res.send(error.sqlMessage)
  }
}




// role assign delete
const deleteRoleAss = async(req,res)=>{
  try{
    let role_id =  req.params.role_id;
    let emp_id =  req.params.emp_id;
    let sqlQuery = 'DELETE FROM role_ass WHERE role_id = ? and emp_id=?';
   await connection.query(sqlQuery,[role_id,emp_id],(err,result)=>{
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


module.exports = {getRole,postRole,deleteRole,roleAssign,AssRole,deleteRoleAss}