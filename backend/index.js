require("dotenv").config();
const express = require("express");
const empRouter = require("./route/empRoute");
const roleRouter = require("./route/roleRoute");

// cors ---> 2  region ko connect karne ke liye(backend to frontend)

const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "PATCH", "PUT", "DELETE"],
    credentials: true,
    httpOnly: true,
  })
);


app.use(express.json());
app.use(cookieParser());

// middle ware  prase the data iske bina data database me store nhi hoga

// routing use kr rhe hai
app.use("/", empRouter);
app.use("/", roleRouter);

let port = 6060;

// listen

app.listen(port, () => {
  console.log(`server is running ${port}`);
});
