const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("In ROOT of the App");
  res.send("Use /api/service-centers/ to get the Service Centers");
});

module.exports = router;
