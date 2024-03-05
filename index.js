require('dotenv').config();
const express = require('express');
const path = require('path');
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', itemRoutes);


app.use(express.static(path.join(__dirname, 'front/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
