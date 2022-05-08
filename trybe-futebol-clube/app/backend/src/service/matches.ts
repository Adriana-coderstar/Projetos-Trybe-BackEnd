import { Op } from 'sequelize';
import Match from '../database/models/Match';
import Team from '../database/models/Team';
import ICreateMatch from '../interface/ICreateMatch';

export default class MatchService {
  public static async getAllMatches(inProgress: string | undefined) {
    const findMatches = await Match.findAll({
      include: [{ model: Team,
        as: 'teamHome',
        attributes: { exclude: ['id'] } },
      { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    if (!inProgress) {
      return findMatches;
    }
  }

  public static async create({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals }: ICreateMatch) {
    const inProgress = true;

    if (homeTeam === awayTeam) {
      return { message: 'It is not possible to create a match with two equal teams', code: 401 };
    }

    const findTimes = await Team.findAll({
      where: { [Op.or]: [{ id: homeTeam }, { id: awayTeam }] },
    });

    if (findTimes.length < 2) return { message: 'There is no team with such id!', code: 404 };

    const newMatch = await Match.create({
      homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress,
    });

    return { code: 201, newMatch };
  }

  public static async finishMatch(id: number) {
    const updateInProgress = await Match.update(
      { inProgress: false },
      { where: { id } },
    );

    return updateInProgress;
  }

  public static async editMatch(id: string, homeTeamGoals: number, awayTeamGoals: number) {
    const updateMAtch = await Match.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );

    return updateMAtch;
  }
}
