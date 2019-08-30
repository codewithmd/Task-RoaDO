// Load Modules
const mongoose = require("mongoose");
const express = require("express");
const app = express();
// Load Routes
const home = require("./routes/home");
const serviceCenters = require("./routes/serviceCenters");

// Databse Connection to ServiceCenter DB
mongoose
  .connect("mongodb://localhost/serviceCenterDB", { useNewUrlParser: true })
  .then(() => console.log("Successfully Connected to service-center-db!"))
  .catch(err => console.log("Couldn't connect!", err));

// Load Middlewares
app.use(express.json());
app.use("/", home);
app.use("/api/service-centers", serviceCenters);

// Handle Server Error
app.use(function(err, req, res, next) {
  console.error(err.stack);

  res.status(500).json({ error: "Something broke!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
