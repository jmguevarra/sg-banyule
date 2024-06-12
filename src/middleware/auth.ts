import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }

        // Assuming you want to store the decoded token payload in req.user
        req.body.user = decoded as JwtPayload;
        next();
    });
};
