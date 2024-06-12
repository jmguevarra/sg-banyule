import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import publicRoutes from './routes/public-route';
import secureRoutes from './routes/secure-route';
import { checkOrigin } from './middleware/cors';
import { generateToken } from './controller/token';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

// Middleware
app.use(express.json());
app.use(cors());
app.use(checkOrigin);

// Routes
app.get('/', (req: Request, res: Response) => {
    res.json({"message": "Server initialized!"});
});
app.use('/token/generate/', generateToken);
app.use('/api/p/', publicRoutes);
app.use('/api/s/', secureRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
