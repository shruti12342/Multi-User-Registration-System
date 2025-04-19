const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors()); 
app.use(express.json());

app.use('/api/scp', require('./routes/auth'));

app.use('/api/farmers', require('./routes/farmers'));

app.listen(3000, () => console.log('Server running on port 3000'));
