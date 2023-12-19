const product = require("../model/prodModel");
const getAllProd = async (req, res) => {
  let allProd = await product.find({});
  res.send(allProd);
};
module.exports = { getAllProd };
