const mysql = require("mysql");
const connection = mysql.createConnection({
  user: "root",
  password: "",
  port: 3306,
  database: "ems",
});
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DB connected sucessfully");
  }
});

module.exports = connection;
