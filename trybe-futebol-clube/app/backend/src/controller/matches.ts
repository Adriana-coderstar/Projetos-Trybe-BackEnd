import { Request, Response, NextFunction } from 'express';
import MatchService from '../service/matches';

export default class MatchesController {
  public static async getMatches(req: Request, res: Response, next:NextFunction) {
    try {
      const { inProgress } = req.query;

      const matches = await MatchService.getAllMatches(inProgress as string | undefined);

      return res.status(200).json(matches);
    } catch (e) {
      next(e);
    }
  }

  public static async CreateMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const newMatch = await MatchService.create(req.body);

      if (newMatch.message) return res.status(newMatch.code).json({ message: newMatch.message });

      return res.status(newMatch.code).json(newMatch.newMatch);
    } catch (e) {
      return next(e);
    }
  }

  public static async FinishMatch(req: Request, res: Response, next:NextFunction) {
    try {
      const { id } = req.params;

      await MatchService.finishMatch(Number(id));

      return res.status(200).json('Finalizado');
    } catch (e) {
      next(e);
    }
  }

  public static async EditMatch(req: Request, res: Response, next:NextFunction) {
    try {
      const { id } = req.params;

      const { homeTeamGoals, awayTeamGoals } = req.body;

      await MatchService.editMatch(id, homeTeamGoals, awayTeamGoals);

      return res.status(200).json({ message: 'Update' });
    } catch (e) {
      next(e);
    }
  }
}
