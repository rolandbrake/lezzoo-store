const { db } = require("../dbConfig");
exports.getProduct = (req, res) => {
  const sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
};

exports.getCategoryProducts = (req, res) => {
  const sql = `SELECT * FROM products WHERE categoryId = ${req.params.categoryId}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
};

exports.createProduct = (req, res) => {
  const sql = "INSERT INTO products SET ?";
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: result.insertId, ...req.body });
  });
};

exports.updateProduct = (req, res) => {
  const sql = `UPDATE products SET title = "${req.body.title}", description = "${req.body.description}",price = "${req.body.price}" imageURL = "${req.body.imageURL}" WHERE id = ${req.params.id};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: req.params.id, ...req.body });
  });
};

exports.deleteProduct = (req, res) => {
  const sql = `DELETE FROM products WHERE id=${req.params.id};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: req.params.id });
  });
};
