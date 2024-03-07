require('dotenv').config();
const express = require('express');
const path = require('path');
const itemRoutes = require('./src/routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', itemRoutes);

// In development the 3000 port would be used for React. If react build was executed react app will be available on /
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});
