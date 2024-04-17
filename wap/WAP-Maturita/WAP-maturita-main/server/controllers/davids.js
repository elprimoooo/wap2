const David = require("../models/davids");

exports.getAllDavids = async (req, res) => {
  try {
    const result = await David.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Davids found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Davids not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDavidById = async (req, res) => {
  try {
    const result = await David.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "David found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "David not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteDavid = async (req, res) => {
  try {
    const result = await David.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "David deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDavid = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      iq: req.body.iq,
      veks: req.body.veks,
    };
    const result = await David.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "David updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "David was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createDavid = async (req, res) => {
  try {
    const data = new David({
      name: req.body.name,
      iq: req.body.iq,
      vek: req.body.vek,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "David created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "David was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
