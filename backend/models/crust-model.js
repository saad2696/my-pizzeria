const mongoose = require("mongoose");

const addCrustSchema = mongoose.Schema({
  crust: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model('crustType',addCrustSchema)

