import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

// ENV Config
dotenv.config();

// Connect to Database
connectDB();
// Initialize Express App
const app = express();

// Home Route
app.get('/', (req, res) => {
    res.send('API is active..');
});

// Products Routes
app.use('/api/products', productRoutes);

// Middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
// Start Express Server
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);
