const mongoose = require('mongoose');
const FarmerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  village: String,
  crop: String,
  scpId: { type: mongoose.Schema.Types.ObjectId, ref: 'SCP' },
}, { timestamps: true });
module.exports = mongoose.model('Farmer', FarmerSchema);
