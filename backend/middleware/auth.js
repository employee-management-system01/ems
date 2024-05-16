// auth ,  isStudent ,  isAmin
require("dotenv").config();
const jwt = require("jsonwebtoken");

// next call lagni padegi next vale middleware per jane ke liye
exports.auth = (req, res, next) => {
  console.log("cookie", req.cookies.token);
  try {
    // //extract jwt token from req.body
    // //other way to fetc  h token  1.cookie  2.header
    // console.log("body",req.body.token);
    // console.log("header",req.header("Authorization"));
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }
    //verify the token--> jise user authenticate hai ya nhi pata chalega
    try {
      //verify -->decoded token mil jayega  , token me jo data store kiya
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      console.log(payload);
      // payload ko store kr liya hai req.user
      req.email = payload.email;
      req.id = payload.id;
      req.role = payload.role;
      next();
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong , while verifying token",
    });
  }
};

//Authorization

exports.isAdmin = (req, res, next) => {
  try {
    if (req.role !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is not a protected route for admin",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User Role is not matching",
    });
  }
};

exports.getData = (req,res) =>{
  return(
    res.json({
      email:req.email,
      id:req.id,
      role:req.role
    })
  )

}