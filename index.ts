import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { connectRedis } from './config/redis';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB and Redis
connectDB();
connectRedis();

// Routes
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => res.send('API is running'));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
