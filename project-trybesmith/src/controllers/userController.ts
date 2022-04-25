import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
  addUser = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;

    const { code, token } = await userService.addUser({ username, classe, level, password });

    res.status(code).json({ token });
  };
}

export default new UserController();