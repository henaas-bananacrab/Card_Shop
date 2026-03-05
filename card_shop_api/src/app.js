const dotenv = require('dotenv').config( { path: '../.env' } );
const express = require('express');
const cors = require('cors');

const userRoutes = require('./v1.0.0/routes/userRoutes');
const typeRoutes = require('./v1.0.0/routes/typeRoutes');
const rarityRoutes = require('./v1.0.0/routes/rarityRoutes');
const productRoutes = require('./v1.0.0/routes/productRoutes');
const addressRoutes = require('./v1.0.0/routes/addressRoutes');
const authRoutes = require('./v1.0.0/routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/v1.0.0', authRoutes);
app.use('/api/v1.0.0', userRoutes);
app.use('/api/v1.0.0', typeRoutes);
app.use('/api/v1.0.0', rarityRoutes);
app.use('/api/v1.0.0', productRoutes);
app.use('/api/v1.0.0', addressRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;