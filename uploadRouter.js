// uploadRouter.js
const express = require('express');
const upload = require('./uploadMiddleware');

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.status(200).json({ url: req.file.path });
});

module.exports = router;
