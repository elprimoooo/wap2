var express = require("express");
var router = express.Router();

const ondrasController = require("../controllers/ondras");

router.get("/", ondrasController.getAllOndras);

//localhost:3000/ondras/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", ondrasController.getOndraById);

router.delete("/:id", ondrasController.deleteOndra);

router.put("/:id", ondrasController.updateOndra);

router.post("/", ondrasController.createOndra);

module.exports = router;
