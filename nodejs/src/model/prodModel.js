const mongoose = require("mongoose");

const prodSchema = mongoose.Schema(
  {
    name: String,
    price: String,
  },
  { collection: "Products", timestamps: true }
);

const product = mongoose.model("Products", prodSchema);
module.exports = product;
