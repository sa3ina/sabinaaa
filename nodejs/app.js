const express = require("express");
require("dotenv").config();
require("./src/config/db");
const app = express();
const port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const prodRouter = require("./src/routers/prodRouter");
app.use("/", prodRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// const express = require("express");
// const app = express();
// const port = 3000;
// var bodyParser = require("body-parser");
// const data = require("./db.json");

// app.use(bodyParser.json());
// app.get("/", (req, res) => {
//   res.send("Products");
// });

// app.get("/products", (req, res) => {
//   let dataprod = data.products;
//   if (req.query.name) {
//     dataprod = dataprod.filter((elem) => elem.name.includes(req.query.name));
//     console.log("name");
//   }
//   if (req.query.price) {
//     dataprod = dataprod.filter((elem) => elem.price == req.query.price);
//     console.log("price");
//   }
//   res.send(dataprod);
// });
// app.get("/products/getAll", (req, res) => {
//   res.send(data);
// });
// app.get("/products/:id/", (req, res) => {
//   a = data.products.find((elem) => elem.id == req.params.id);
//   res.send(a);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
