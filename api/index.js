const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const cors = require("cors")({ origin: true });

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors);
app.use(jsonParser); // use it globally

const {
  getStore,
  getAllStores,
  createStore,
  updateStore,
  deleteStore,
} = require("./handlers/stores");

app.get("/api/v1/stores/:id", getStore);
app.get("/api/v1/stores/", getAllStores);

app.post("/api/v1/stores", createStore);

app.put("/api/v1/stores/:id", updateStore);

app.delete("/api/v1/stores/:id", deleteStore);

const {
  getCategory,
  getStoreCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("./handlers/categories");

app.get("/api/v1/categories/:id", getCategory);
app.get("/api/v1/categories/:storeId", getStoreCategories);

app.post("/api/v1/categories", createCategory);

app.put("/api/v1/categories/:id", updateCategory);

app.delete("/api/v1/categories/:id", deleteCategory);

const {
  getProduct,
  getCategoryProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./handlers/products");

app.get("/api/v1/products/:id", getProduct);
app.get("/api/v1/products/:categoryId", getCategoryProducts);

app.post("/api/v1/products", createProduct);

app.put("/api/v1/products/:id", updateProduct);

app.delete("/api/v1/products/:id", deleteProduct);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
