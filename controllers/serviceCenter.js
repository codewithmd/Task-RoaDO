const {
  ServiceCenter,
  validateServiceCenter
} = require("../models/serviceCenter");

const ServiceCenterController = {
  async getServiceCenters(req, res) {
    try {
      const serviceCenters = await ServiceCenter.find();
      res.status(200).json({ message: "Success", serviceCenters });
    } catch (e) {
      res
        .status(404)
        .json({ message: "Something Went Wrong in Getting ServiceCenters" });
    }
  },
  async getServiceCenter(req, res) {
    try {
      const id = req.params.id;
      const serviceCenter = await ServiceCenter.findById(id);
      if (!serviceCenter)
        return res
          .status(404)
          .json({ message: "Couldn't find serviceCenter with given ID" });

      res.status(200).json({ message: "Success", serviceCenter });
    } catch (e) {
      res
        .status(404)
        .json({ message: "Something Went Wrong in Getting serviceCenter" });
    }
  },
  async postServiceCenter(req, res) {
    const { error } = validateServiceCenter(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    } else {
      try {
        const result = await ServiceCenter.create(req.body);
        res.status(201).json({ message: "Success", result });
      } catch (e) {
        res
          .status(400)
          .json({ message: "Something Went Wrong in Creating Service Center" });
      }
    }
  },
  async updateServiceCenter(req, res) {
    const { error } = validateServiceCenter(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    } else {
      try {
        const result = await ServiceCenter.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true
          }
        );
        if (!result)
          return res
            .status(404)
            .json({ message: "Couldn't find with given ID" });

        res.status(201).json({ message: "Successfully Updated", result });
      } catch (e) {
        res
          .status(400)
          .json({ message: "Something Went Wrong in Updating Service Center" });
      }
    }
  },
  async removeServiceCenter(req, res) {
    try {
      const result = await ServiceCenter.findByIdAndRemove(req.params.id);
      if (!result)
        return res.status(404).json({ message: "Couldn't find with given ID" });

      res.status(200).json({ message: "Successfully Deleted", result });
    } catch (e) {
      res
        .status(400)
        .json({ message: "Something Went Wrong in Deleting Service Center" });
    }
  }
};

module.exports = ServiceCenterController;
