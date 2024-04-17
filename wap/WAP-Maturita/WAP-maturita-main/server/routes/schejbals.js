var express = require("express");
var router = express.Router();

const controller = require("../controllers/schejbals");

router.get("/", controller.getAllSchejbals);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getSchejbalById);

router.delete("/:id", controller.deleteSchejbal);

router.put("/:id", controller.updateSchejbal);

router.post("/", controller.createSchejbal);

module.exports = router;
