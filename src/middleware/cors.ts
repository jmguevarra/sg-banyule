import { Request, Response, NextFunction } from 'express';


export const checkOrigin = (req: Request, res: Response, next: NextFunction) => {
    const allowedOrigins = ["localhost:3000", "mp.kongo.melbourne"];
    const origin: string = req.headers.host ?? '';
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        next();
    }else {
        res.status(403).json({ message: 'Origin not allowed' });
    }
};
