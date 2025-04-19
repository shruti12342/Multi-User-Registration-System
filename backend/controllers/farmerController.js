const Farmer = require('../models/Farmer');

// POST /api/farmers/add
exports.addFarmer = async (req, res) => {
  try {
    const { name, phone, village, crop } = req.body;
    const newFarmer = new Farmer({
      name,
      phone,
      village,
      crop,
      scpId: req.user.id, // this comes from JWT auth
    });
    await newFarmer.save();
    res.status(201).json({ message: 'Farmer added successfully', farmer: newFarmer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /api/farmers/list
exports.getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find({ scpId: req.user.id });
    res.json(farmers);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch farmers' });
  }
};
