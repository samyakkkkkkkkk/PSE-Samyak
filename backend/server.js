const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDB } = require('./db');
const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/report');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
connectToDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/report', reportRoutes);

// Serve static files from the frontend folder
app.use(express.static('../frontend'));

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));