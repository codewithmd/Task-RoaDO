const mongoose = require("mongoose");
const Joi = require("joi");
const serviceCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required!"],
    minlength: 5,
    maxlength: 50,
    lowercase: true,
    trim: true
  },
  location: {
    type: String,
    required: [true, "Location is Required!"]
  },
  rentalCharge: {
    type: String,
    required: true
  },
  isWorking: {
    type: Boolean,
    default: true
  }
});

const ServiceCenter = mongoose.model("ServiceCenter", serviceCenterSchema);

// validateServiceCenter
function validateServiceCenter(serviceCenter) {
  console.log(serviceCenter);

  const serviceCenterSchema = {
    name: Joi.string()
      .required()
      .min(5)
      .max(50),

    location: Joi.string().required(),
    rentalCharge: Joi.string().required()
  };
  return Joi.validate(serviceCenter, serviceCenterSchema);
}
module.exports.ServiceCenter = ServiceCenter;

module.exports.validateServiceCenter = validateServiceCenter;
