const express = require('express');
const { getDB } = require('../db');

const router = express.Router();

// Submit Report
router.post('/submit', async (req, res) => {
  const { name, date, complaint } = req.body;
  const db = getDB();
  const reports = db.collection('reports');

  try {
    await reports.insertOne({ name, date, complaint });
    res.status(201).json({ message: 'Report submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;