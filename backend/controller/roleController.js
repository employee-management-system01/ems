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


module.exports = {getRole}