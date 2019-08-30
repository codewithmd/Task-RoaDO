const ServiceCenterController = require("../controllers/serviceCenter");
const express = require("express");
const router = express.Router();

router.get("/", ServiceCenterController.getServiceCenters);

router.get("/:id", ServiceCenterController.getServiceCenter);

router.post("/", ServiceCenterController.postServiceCenter);

router.put("/:id", ServiceCenterController.updateServiceCenter);

router.delete("/:id", ServiceCenterController.removeServiceCenter);

module.exports = router;
