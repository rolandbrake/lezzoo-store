const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "lezzoo_store_db",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql connected...");
});

exports.db = db;
