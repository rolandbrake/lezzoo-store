const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const cors = require("cors")({ origin: true });

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
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors);
app.use(jsonParser); // use it globally

app.post("/api/v1/stores", (req, res) => {
  const sql = "INSERT INTO stores SET ?";
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.delete("/api/v1/stores/:id", (req, res) => {
  const sql = `DELETE FROM stores WHERE id=${req.params.id};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.get("/api/v1/stores/:id", (req, res) => {
  const sql = `SELECT * FROM stores WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.get("/api/v1/stores/", (req, res) => {
  const sql = `SELECT * FROM stores WHERE id BETWEEN ${req.body.start} AND ${req.body.end}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.post("/api/v1/stores", (req, res) => {
  const sql = "INSERT INTO stores SET ?";
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.post("/api/v1/gategories", (req, res) => {
  const sql = "INSERT INTO stores SET ?";
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.get("/api/v1/gategories/:storeId", (req, res) => {
  const sql = `SELECT * FROM stores WHERE storeId = ${req.params.storeId}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.post("/api/v1/products", (req, res) => {
  const sql = "INSERT INTO stores SET ?";
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.get("/api/v1/products/:categoryId", (req, res) => {
  const sql = `SELECT * FROM categories WHERE (categoryId = ${req.params.categoryId} AND id BETWEEN (${req.body.start} AND ${req.body.end}))`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
