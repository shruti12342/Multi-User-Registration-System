const express = require('express');
const { addFarmer, getFarmers } = require('../controllers/farmerController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/add', auth, addFarmer);
router.get('/list', auth, getFarmers);

module.exports = router;
