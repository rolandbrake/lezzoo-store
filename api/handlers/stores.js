const { db } = require("../dbConfig");
exports.getStore = (req, res) => {
  const sql = `SELECT * FROM stores WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
};

exports.getAllStores = (req, res) => {
  const sql = `SELECT * FROM stores`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send(result);
  });
};

exports.createStore = (req, res) => {
  const sql = "INSERT INTO stores SET ?";
  db.query(sql, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: result.insertId, ...req.body });
  });
};

exports.updateStore = (req, res) => {
  const sql = `UPDATE stores SET title = "${req.body.title}", description = "${req.body.description}", imageURL = "${req.body.imageURL}" WHERE id = ${req.params.id};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: req.params.id, ...req.body });
  });
};

exports.deleteStore = (req, res) => {
  const sql = `DELETE FROM stores WHERE id=${req.params.id};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else res.status(200).send({ id: req.params.id });
  });
};
