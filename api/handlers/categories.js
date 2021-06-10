const { db } = require("../dbConfig");
exports.getCategory = (req, res) => {
  const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
};

exports.getStoreCategories = (req, res) => {
  const sql = `SELECT * FROM categories WHERE storeId = ${req.params.storeId}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
};

exports.createCategory = (req, res) => {
  const sql = "INSERT INTO categories SET ?";
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: result.insertId, ...req.body });
  });
};

exports.updateCategory = (req, res) => {
  const sql = `UPDATE categories SET title = "${req.body.title}", description = "${req.body.description}", imageURL = "${req.body.imageURL}" WHERE id = ${req.params.id};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: req.params.id, ...req.body });
  });
};

exports.deleteCategory = (req, res) => {
  const sql = `DELETE FROM categories WHERE id=${req.params.id};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: req.params.id });
  });
};
