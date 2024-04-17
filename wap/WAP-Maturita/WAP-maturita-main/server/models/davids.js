const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  iq: { type: Number, required: true },
  vek: { type: Number, required: true },
});

module.exports = mongoose.model("David", schema);