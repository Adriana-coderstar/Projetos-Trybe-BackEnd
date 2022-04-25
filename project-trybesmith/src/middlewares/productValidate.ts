import { NextFunction, Request, Response } from 'express';
import productSchema from '../schemas/productSchema';

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ error: message });
  }

  return next();
};