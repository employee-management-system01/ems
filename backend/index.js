const express = require('express')
const empRouter = require('./route/empRoute');
const roleRouter = require('./route/roleRoute');

// cors ---> 2  region ko connect karne ke liye(backend to frontend)

const cors =  require("cors");




const app = express()


app.use(cors());

// middle ware  prase the data iske bina data database me store nhi hoga
app.use(express.json())


// routing use kr rhe hai
app.use('/',empRouter)
app.use('/',roleRouter);




let port = 6060;


// listen

app.listen(port,()=>{
  console.log(`server is running ${port}`);
})
