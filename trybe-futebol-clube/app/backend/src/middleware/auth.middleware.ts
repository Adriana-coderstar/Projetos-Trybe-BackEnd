import { NextFunction, Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { verify } from 'jsonwebtoken';

const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Token not found' });

    const SECRET = await readFile('jwt.evaluation.key', 'utf8');

    const decode = verify(token, SECRET);
    req.body.tokenData = decode;

    next();
  } catch (error) {
    return next(error);
  }
};

export default AuthMiddleware;
