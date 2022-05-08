import { Request, Response, NextFunction } from 'express';
import TeamService from '../service/teams';

export default class TeamController {
  public static async getTeams(req: Request, res: Response, next:NextFunction) {
    try {
      const teams = await TeamService.getAllTeams();

      return res.status(200).json(teams);
    } catch (e) {
      next(e);
    }
  }

  public static async getTeamById(req: Request, res: Response, next:NextFunction) {
    try {
      const { id } = req.params;
      const teams = await TeamService.getTeamsById(Number(id));
      return res.status(200).json(teams);
    } catch (e) {
      next(e);
    }
  }
}
