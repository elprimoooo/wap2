var express = require("express");
var router = express.Router();

const controller = require("../controllers/davids");

router.get("/", controller.getAllDavids);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getDavidById);

router.delete("/:id", controller.deleteDavid);

router.put("/:id", controller.updateDavid);

router.post("/", controller.createDavid);

module.exports = router;
