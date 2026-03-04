const express = require('express');

const userRoutes = require('./v1.0.0/routes/userRoutes');
const typeRoutes = require('./v1.0.0/routes/typeRoutes');
const rarityRoutes = require('./v1.0.0/routes/rarityRoutes');
const productRoutes = require('./v1.0.0/routes/productRoutes');
const addressRoutes = require('./v1.0.0/routes/addressRoutes');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/api/v1.0.0', userRoutes);
app.use('/api/v1.0.0', typeRoutes);
app.use('/api/v1.0.0', rarityRoutes);
app.use('/api/v1.0.0', productRoutes);
app.use('/api/v1.0.0', addressRoutes);

module.exports = app;