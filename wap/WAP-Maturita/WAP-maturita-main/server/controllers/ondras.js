const Ondra = require("../models/ondras");

exports.getAllOndras = async (req, res) => {
  try {
    const result = await Ondra.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Ondras found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Ondras not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getOndraById = async (req, res) => {
  try {
    const result = await Ondra.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Ondra found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Ondra not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteOndra = async (req, res) => {
  try {
    const result = await Ondra.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Ondra deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateOndra = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      sila: req.body.sila,
      rychlost: req.body.rychlost,
    };
    const result = await Ondra.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Ondra updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Ondra was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createOndra = async (req, res) => {
  try {
    const data = new Ondra({
      name: req.body.name,
      sila: req.body.sila,
      rychlost: req.body.rychlost,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Ondra created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Ondra was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
