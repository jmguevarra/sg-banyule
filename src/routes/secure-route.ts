import express, { Request, Response } from 'express';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.get('/', authenticateToken, (req: Request, res: Response) => {
    res.json({ message: 'This is a secure route!' });
});


export default router;
