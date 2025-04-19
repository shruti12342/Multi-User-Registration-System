const SCP = require('../models/SCP');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { name, email, password, phone } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const user = await SCP.create({ name, email, phone, password: hashed });
  res.json({ message: "SCP registered", user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await SCP.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};
