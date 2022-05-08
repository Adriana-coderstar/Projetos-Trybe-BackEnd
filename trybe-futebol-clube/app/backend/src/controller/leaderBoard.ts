import { Request, Response, NextFunction } from 'express';
import LeaderBoardService from '../service/leaderBoard';

export default class LeaderBoardController {
  public static getHome = async (req: Request, res: Response, next:NextFunction) => {
    try {
      const home = await LeaderBoardService.home();

      return res.status(200).json(home);
    } catch (e) {
      next(e);
    }
  };
}
