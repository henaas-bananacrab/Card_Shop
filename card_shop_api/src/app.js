const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');

app.use(cors());


const userRoutes = require('./v1.0.0/routes/userRoutes');
const typeRoutes = require('./v1.0.0/routes/typeRoutes');
const rarityRoutes = require('./v1.0.0/routes/rarityRoutes');
const productRoutes = require('./v1.0.0/routes/productRoutes');
const addressRoutes = require('./v1.0.0/routes/addressRoutes');




app.use('/api/v1.0.0', userRoutes);
app.use('/api/v1.0.0', typeRoutes);
app.use('/api/v1.0.0', rarityRoutes);
app.use('/api/v1.0.0', productRoutes);
app.use('/api/v1.0.0', addressRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;