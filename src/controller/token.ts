import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET!;

export const generateToken = (req: Request, res: Response)=> {
    const token = jwt.sign({ username: 'sG@rdener' }, JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
    res.send({ message: 'Token generated and sent' });
};


