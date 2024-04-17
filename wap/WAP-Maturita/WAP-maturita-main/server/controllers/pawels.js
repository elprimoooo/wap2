const Pawel = require("../models/pawels");

exports.getAllPawels = async (req, res) => {
  try {
    const result = await Pawel.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Pawels found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Pawels not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getPawelById = async (req, res) => {
  try {
    const result = await Pawel.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Pawel found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Pawel not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deletePawel = async (req, res) => {
  try {
    const result = await Pawel.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Pawel deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updatePawel = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      nalada: req.body.nalada,
      chytrost: req.body.chytrost,
    };
    const result = await Pawel.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Pawel updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Pawel was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createPawel = async (req, res) => {
  try {
    const data = new Pawel({
      name: req.body.name,
      nalada: req.body.nalada,
      chytrost: req.body.chytrost,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Pawel created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Pawel was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
