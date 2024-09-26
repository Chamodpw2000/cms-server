import express from 'express';
import dotenv from 'dotenv';
import './config/db.js';
import cors from 'cors';
import { Router } from './routes/routes.js';

const app = express();
app.use(express.json());

app.use(cors({
  origin: ["https://cms-client-six.vercel.app"],  // corrected origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

dotenv.config({ path: "./config/.env" });

// Define a root route
app.get('/', (req, res) => {
  res.send('Hello from the root route!');
});

app.use("/contactmsyt", Router);

// Export the app (important for Vercel)
export default app;
