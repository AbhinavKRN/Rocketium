const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const dataPath = path.join(__dirname, '../data/dummyData.json');

router.get('/data', (req, res) => {
  const rawData = fs.readFileSync(dataPath);
  let data = JSON.parse(rawData);

  // Filtering
  const { filterKey, filterValue } = req.query;
  if (filterKey && filterValue) {
    data = data.filter(item => item[filterKey] === filterValue);
  }

  // Sorting
  const { sortKey, sortOrder } = req.query;
  if (sortKey) {
    data = data.sort((a, b) => {
      if (sortOrder === 'desc') {
        return b[sortKey] - a[sortKey];
      }
      return a[sortKey] - b[sortKey];
    });
  }

  res.json(data);
});

module.exports = router;
