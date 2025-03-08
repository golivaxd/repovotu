require('dotenv').config();
const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json()); // Para parsear cuerpos de solicitudes JSON

app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
