const Farmer = require('../models/Farmer');

exports.addFarmer = async (req, res) => {
  try {
    const { name, phone, village, crop } = req.body;
    const newFarmer = new Farmer({
      name,
      phone,
      village,
      crop,
      scpId: req.user.id, 
    });
    await newFarmer.save();
    res.status(201).json({ message: 'Farmer added successfully', farmer: newFarmer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getFarmers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const total = await Farmer.countDocuments({ scpId: req.user.id });
    const farmers = await Farmer.find({ scpId: req.user.id })
                                .skip(skip)
                                .limit(limit);

    res.json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      data: farmers
    });
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch farmers' });
  }
};
