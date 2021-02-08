const mongoose = require("mongoose");

const addOrders = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  addOns: {
    type: String,
    required: false,
  },
  additionalNote: {
    type: String,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("orders", addOrders);
