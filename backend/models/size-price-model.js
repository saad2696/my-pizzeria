const mongoose = require("mongoose");

const addSize = mongoose.Schema({
    size: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model('size',addSize)
