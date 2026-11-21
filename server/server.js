import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Simple health check used by the frontend footer.
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Farmer Friends server is running',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'not connected',
  });
});

// MongoDB is optional. The website works even if this connection fails.
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB not connected (optional):', err.message));
} else {
  console.log('MONGO_URI not set. Running without MongoDB.');
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
