const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// //database connection
const connection = require("../model/dbConnect");
require('dotenv').config();

// post - signup route handler
const signup = async (req, res) => {
  try {
    // get data
    const {
      emp_id,
      emp_name,
      email,
      phone_no,
      salary,
      hire_date,
      password,
      department,
    } = req.body;

    // check if employee already exists
    const existingEmp = await connection.query(
      "SELECT * FROM emp_details WHERE email = ?",
      [email]
    );

    if (existingEmp.length > 0) {
      // Check if any rows were returned
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create entry for Emp
    const employeeData = {
      emp_id,
      emp_name,
      email,
      phone_no,
      salary,
      hire_date,
      password: hashedPassword,
      department,
    };

    const emp = await connection.query(
      "INSERT INTO emp_details SET ?",
      employeeData,
      (err, result) => {
        if (err) {
          return res.send({ Error: err.sqlMessage });
        }
        return res.send({ status: 200, Response: result });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered, please try again later",
    });
  }
};

// login route handlerconst
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all the details carefully",
      });
    }

    // 'SELECT * FROM emp_details INNER JOIN role_ass ON emp_details.emp_id = role_ass.emp_id INNER JOIN roles ON role_ass.role_id = roles.role_id WHERE email = ?'

    // console.log(req.body);
    // Check for registered user
    const sql = 'SELECT * FROM emp_details INNER JOIN role_ass ON emp_details.emp_id = role_ass.emp_id INNER JOIN roles ON role_ass.role_id = roles.role_id WHERE email = ?';
   

     connection.query(sql, [email], async(err, result) => {
      if (err) throw err;

      if (result.length === 0) {
        return res.status(401).json({ message: 'No user found' });
      }
      
      const user = result[0];
      // console.log(user);
         //verify password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

    

      //token
      const payload = {
        email : user.email,
        id : user.emp_id,
        role:user.role_name
      }
      //generate a JWT token
      const token = jwt.sign( payload,process.env.JWT_SECRET, { expiresIn: '1h' });
      // res.json({ token });  note:  --> client side se jo request aa rhi hai server use ek hi response krega 
    

        user.token =  token;
        user.password =  undefined

     //  cookies --> cookie name, data, 
     const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true   //client side pe access nhi kr skte hai
    }
    res.cookie('token',token,options).status(200).json({
      success: true,
      token,
      user,
      message: 'User Logged in suceesfully'
    })
  })
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success: false,
      message: "login error",
    });
  }
};

module.exports = { signup, login };
