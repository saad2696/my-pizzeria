const express = require("express");
const Flavour = require("../models/flavours-model");

const router = express.Router();

//all flavours
router.get("/", async (req, res) => {
  try {
    const allFlavours = await Flavour.find();
    res.json(allFlavours);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//specific flavour
router.get("/:flavourId", async (req, res) => {
  try {
    const flavour = await Flavour.findById(req.params.flavourId);
    res.json(flavour);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//add flavours
router.post("/add", async (req, res) => {
  const flavour = new Flavour({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedFlavour = await flavour.save();
    res.json(savedFlavour);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//delete flavours
router.delete("/delete/:flavourId", async (req, res) => {
  try {
    const removedFlavour = await Flavour.remove({ _id: req.params.flavourId });
    res.json(removedFlavour);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//update a post title
router.patch("/update/:flavourId", async (req, res) => {
  try {
    const updateFlavour = await Flavour.updateOne(
      { _id: req.params.flavourId },
      { $set: { description: req.body.description } }
    );
    res.json(updateFlavour);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
