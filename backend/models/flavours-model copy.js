const mongoose = require("mongoose");

const addFlavourSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});


module.exports = mongoose.model('flavours',addFlavourSchema)
