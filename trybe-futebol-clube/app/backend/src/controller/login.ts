import { Request, Response, NextFunction } from 'express';
import LoginService from '../service/login';

export default class LoginController {
  public static async create(req: Request, res: Response, next:NextFunction) {
    try {
      const { email, password } = req.body;

      const login = await LoginService.create(email, password);

      if (!login) {
        return res.status(400).json({ message: 'Username or password invalid' });
      }
      res.status(200).json(login);
    } catch (e) {
      next(e);
    }
  }

  public static async validate(req: Request, res: Response, next:NextFunction) {
    try {
      const getData = await req.body.tokenData.data.role;
      if (getData) return res.status(200).json(getData);
    } catch (error) {
      return next(error);
    }
  }
}
