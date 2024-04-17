var express = require("express");
var router = express.Router();

const controller = require("../controllers/pawels");

router.get("/", controller.getAllPawels);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getPawelById);

router.delete("/:id", controller.deletePawel);

router.put("/:id", controller.updatePawel);

router.post("/", controller.createPawel);

module.exports = router;
