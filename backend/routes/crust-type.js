const express = require("express");
const Crust = require("../models/crust-model");

const router = express.Router();

//all Crusts
router.get("/", async (req, res) => {
  try {
    const allCrust = await Crust.find();
    res.json(allCrust);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//specific crust
router.get("/:crustId", async (req, res) => {
  try {
    const crust = await Crust.findById(req.params.crustId);
    res.json(crust);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//add crust
router.post("/add", async (req, res) => {
  const crust = new Crust({
    crust: req.body.crust,
  });
  try {
    const savedCrust = await crust.save();
    res.json(savedCrust);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//delete flavours
router.delete("/delete/:crustId", async (req, res) => {
  try {
    const removedCrust = await Crust.deleteOne({ crustId: req.params.crustId });
    res.json(removedCrust);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//update crust type
router.patch("/update/:crustId", async (req, res) => {
  try {
    const updateCrust = await Crust.updateOne(
      { _id: req.params.crustId },
      { $set: { crust: req.body.crust } }
    );
    res.json(updateCrust);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
