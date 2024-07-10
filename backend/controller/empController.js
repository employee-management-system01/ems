const { query } = require("express");
const connection = require("../model/dbConnect");
// const nodemailer = require('nodemailer')

// get
const getEmp = async (req, res) => {
  try {
    let userData = req.body;
    let sqlQuery = "SELECT * from emp_details; ";

    await connection.query(sqlQuery, userData, (err, result) => {
      if (err) {
        console.log("Error:", err.sqlMessage);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};

// get with search
const getSearch = async (req, res) => {
  try {
    // let userData = req.body.query;
    let emp_id = req.params.emp_id;
    let sqlQuery = "SELECT * FROM emp_details where emp_id = ?";
    await connection.query(sqlQuery, [emp_id], function (err, result) {
      if (err) {
        console.log("Error:", err.sqlMessage);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};

//Search emp by name

const getSearch2 = async (req, res) => {
  try {
    // let userData = req.body.query;
    let emp_name = req.params.emp_name;
    console.log(emp_name);
    let sqlQuery = "SELECT * FROM emp_details WHERE emp_name = ?";
    await connection.query(sqlQuery, [emp_name], function (err, result) {
      if (err) {
        console.log("Error:", err.sqlMessage);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};



// post
// const postEmp = async (req, res) => {
// let recieverMail = req.body.email
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//    // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: "lodhigaurav23@gmail.com",
//     pass: "clhk vmcf xohk smwy",
//   },
// });
//  const info = await transporter.sendMail({
//    from: '"Maddison Foo Koch 👻" <lodhigaurav23@gmail.com>', // sender address
//    to: recieverMail,   // particular email address bhi likh skte hai
//    subject:"Hello ",  // subject line  // jo name title se ja raha hai
//    text: "Hello world?", // plain text body ///jo massage hai actual
//        // html: "<b>Hello world?</b>", // html body
//       });

//   try {
//     let userData = req.body;
//     let sqlQuery = 'INSERT INTO emp_details SET ?';
//     await connection.query(sqlQuery, [userData], function (err, result) {
//       if (err) {
//         console.log('error:', err.sqlMessage);
//       } else {
//         res.send(result)
//       }
//     })
//   } catch (error) {
//     res.send(error.sqlMessage)
//   }
// }

// delete

const deleteEmp = async (req, res) => {
  try {
    let emp_id = req.query.emp_id;
    let sqlQuery = "DELETE FROM emp_details WHERE emp_id = ?";
    await connection.query(sqlQuery, [emp_id], (err, result) => {
      if (err) {
        console.log("Error:", err.sqlMessage);
      } else {
        res.json(result);
      }
    });
  } catch (error) {
    res.send(error.sqlMessage);
  }
};

// put
const updateEmp = async (req, res) => {
  try {
    let emp_id = req.params.emp_id;
    console.log(emp_id);
    let { emp_name, email, phone_no, salary, hire_date, password, department } =
      req.body;
    let sqlQuery =
      "UPDATE emp_details SET emp_name=?, email=?, phone_no=?, salary=?, hire_date=?, `password`=?, department=? WHERE emp_id=?";
    await connection.query(
      sqlQuery,
      [
        emp_name,
        email,
        phone_no,
        salary,
        hire_date,
        password,
        department,
        emp_id,
      ],
      (err, result) => {
        if (err) {
          console.log("Error:", err.sqlMessage);
          res.status(500).json({ error: err.sqlMessage });
        } else {
          res.json(result);
          console.log(result);
        }
      }
    );
  } catch (error) {
    res.status(500).send(error.sqlMessage);
  }
};

// cards api

const cardApi = async (req, res) => {
  let data = req.body;
  let sqlQuery =
    "SELECT (SELECT COUNT(*) FROM emp_details) as emp_rows, (select sum(salary) from emp_details as totalSalary) ";
  await connection.query(sqlQuery, [data], (err, result) => {
    if (err) {
      console.log("Error", err.sqlMessage);
      res.json(err)
    } else {
      res.send(result);
    }
  });
};

//toggle api
const toggleStatus = async (req, res) => {
  try {
    let emp_id = req.params.emp_id;
    // console.log(emp_id);
    let status = req.params.status;
    let sqlQuery = "UPDATE emp_details SET status = ? WHERE emp_id=?";
    await connection.query(sqlQuery, [status, emp_id], (err, result) => {
      if (err) {
        console.log("Error:", err.sqlMessage);
        res.status(500).json({ error: err.sqlMessage });
      } else {
        res.json(result);
        console.log(result);
      }
    });
  } catch (error) {
    res.status(500).send(error.sqlMessage);
  }
};

//  attendance

const attendance = async (req,res)=>{
  try{
    let {email} = req.body;
    let sqlQuery = `INSERT INTO attendance (email, check_in) VALUES (?, NOW())`;
    await connection.query(sqlQuery,[email],(err,result)=>{
      if (err) {
        console.log("Error:", err.sqlMessage);
        res.status(500).json({ error: err.sqlMessage });
      } else {
        res.json(result);
        console.log(result);
      }
    })
  }catch(error){
    res.status(500).send(error.sqlMessage);
  }
}

const check_out = async (req, res) => {
  try {
    const { email } = req.params; 
    console.log(req.params);

    const sqlQuery = `UPDATE attendance SET check_out = NOW() WHERE email = ?`;
    await connection.query(sqlQuery, [email], (err, result) => {
      if (err) {
        console.error("Error:", err.message);
        return res.status(500).json({ error: err.message });
      } else {
        console.log("Updated:", result.affectedRows);
        return res.json({ message: "Check-out time updated successfully" });
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};


//attendance

const getAttendance = async(req,res)=>{
  try{
    
    const sqlQuery = ' SELECT emp_details.emp_id,emp_details.emp_name,attendance.check_in,attendance.check_out,attendance.status,attendance.timedifference FROM attendance JOIN emp_details ON attendance.email =  emp_details.email;'
    connection.query(sqlQuery,(err,result)=>{
      if(err){
        console.log("Error:",err.sqlMessage);
        res.status(500).json({ error: err.sqlMessage });
      }else{
        res.json(result)
      }
    })
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}

//admin details

const getAdminProfile = async(req,res)=>{
  try{
    const sqlQuery = 'SELECT emp_details.emp_id, emp_details.emp_name,emp_details.phone_no,emp_details.email,roles.role_id,roles.role_name FROM  emp_details INNER JOIN role_ass ON emp_details.emp_id = role_ass.emp_id INNER JOIN roles ON role_ass.role_id =  roles.role_id WHERE role_name = "Admin" ';
    connection.query(sqlQuery,(err,result)=>{
      if(err){
        res.status(500).json({ error: err.sqlMessage });
      }else{
        res.json(result)
      }
    })
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}


// upload admin photo

const uploadfile = async(req,res)=>{
  try{
      let emp_id = req.params.emp_id;
      let sqlQuery = ' UPDATE emp_details SET photo = ? WHERE emp_id = ? '  
      let data = {
        photo : req.file.location
      }
     
      await connection.query(sqlQuery,[data.photo,emp_id],(err, result)=>{
        if(err){
          res.status(500).json({ error: err.sqlMessage });
        }else{
          res.json(result)
          console.log(req.file);
        }
      })
  }catch(error){
    res.status(500).json({ error: error.message });
  }
}


// function addcourse(req,res){
//   try{
//       let sql="INSERT INTO courses SET ?"
//       let data={
//           course_id: req.body.course_id,
//           course_name: req.body.course_name,
//           syllabus: req.file.location,
//           duration: req.body.duration,
//           fees: req.body.fees,
//           description: req.body.description,
//           teacher_id :req.body.teacher_id ,
//           status:"pending"
//       }
//       connection.query(sql,[data],(err,result)=>{
//           if(err){
//               console.log(err)
//           }else{
//               res.send(result)
//           }
//       })
//   }catch(error){
//       console.error(error)
//     }
// }


module.exports = {
  getEmp,
  deleteEmp,
  getSearch,
  updateEmp,
  cardApi,
  toggleStatus,
  getSearch2,
  attendance,
  check_out,getAttendance,
  getAdminProfile,
  uploadfile
};
