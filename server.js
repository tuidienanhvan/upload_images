// server.js
const express = require('express');
const cors = require('cors');
const uploadRouter = require('./uploadRouter.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', uploadRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
