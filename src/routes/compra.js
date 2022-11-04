const express = require("express");
const router = express.Router();
const { createCompra} = require("../controllers/compraController")

// create
router.post('/compra', createCompra);




module.exports = router;