const express = require('express');
const connectDB = require('./config/connection');
const apiRoutes = require('./routes/api');

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
