const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Example endpoint - replace with real logic or integrate with your data source
router.get('/projects', (req, res) => {
  const projects = [
    { id: 1, name: 'Example Project A' },
    { id: 2, name: 'Example Project B' }
  ];
  res.json(projects);
});

router.post('/echo', (req, res) => {
  res.json({ body: req.body || null });
});

module.exports = router;
