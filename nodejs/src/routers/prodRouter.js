const router = require("express").Router();
const prodControllers = require("./../controllers/prodController");

router.get("/products", prodControllers.getAllProd);
module.exports = router;
