const Schejbal = require("../models/schejbals");

exports.getAllSchejbals = async (req, res) => {
  try {
    const result = await Schejbal.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Schejbals found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Schejbals not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getSchejbalById = async (req, res) => {
  try {
    const result = await Schejbal.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Schejbal found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Schejbal not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteSchejbal = async (req, res) => {
  try {
    const result = await Schejbal.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Schejbal deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateSchejbal = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      pohlavi: req.body.pohlavi,
      ucitel: req.body.ucitel,
    };
    const result = await Schejbal.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Schejbal updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Schejbal was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createSchejbal = async (req, res) => {
  try {
    const data = new Schejbal({
      name: req.body.name,
      pohlavi: req.body.pohlavi,
      ucitel: req.body.ucitel,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Schejbal created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Schejbal was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
