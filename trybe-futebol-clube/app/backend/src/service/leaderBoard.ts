import Match from '../database/models/Match';
import Team from '../database/models/Team';
import { ILeaderBoard, IGoalsInfo } from '../interface/ILeaderBoard';

export default class LeaderBoardService {
  public static home = async () => {
    const allMatches = await Match.findAll();
    const allTeams = await Team.findAll();

    const matches = allTeams.map((team) => {
      const getMatches = allMatches.filter((match) => (
        match.homeTeam === team.id
        && match.inProgress === false))
        .map((goals) => ({
          goalsFavor: goals.homeTeamGoals,
          goalsOwn: goals.awayTeamGoals,
        }));

      return LeaderBoardService.homeResults(team.teamName, getMatches);
    });

    this.orderResult(matches);

    return matches;
  };

  public static orderResult = (orderResult: ILeaderBoard[]) => {
    orderResult.sort((a, b) => a.goalsOwn - b.goalsOwn);
    orderResult.sort((a, b) => b.goalsFavor - a.goalsFavor);
    orderResult.sort((a, b) => b.goalsBalance - a.goalsBalance);
    orderResult.sort((a, b) => b.totalVictories - a.totalVictories);
    orderResult.sort((a, b) => b.totalPoints - a.totalPoints);
  };

  public static TotalPoints = (points: IGoalsInfo[]) => {
    const getTotalPoints = points.reduce((totalPoints, { goalsFavor, goalsOwn }) => {
      if (goalsFavor > goalsOwn) return totalPoints + 3;
      if (goalsFavor === goalsOwn) return totalPoints + 1;
      return totalPoints;
    }, 0);
    return getTotalPoints;
  };

  public static TotalVictories = (victories: IGoalsInfo[]) => {
    const getVictories = victories.reduce((acc, curr) => {
      if (curr.goalsFavor > curr.goalsOwn) return acc + 1;
      return acc;
    }, 0);
    return getVictories;
  };

  public static TotalDraws = (draws: IGoalsInfo[]) => {
    const getDraws = draws.reduce((totalDraws, { goalsFavor, goalsOwn }) => {
      if (goalsFavor === goalsOwn) return totalDraws + 1;
      return totalDraws;
    }, 0);
    return getDraws;
  };

  public static TotalLosses = (losses: IGoalsInfo[]) => {
    const getLosses = losses.reduce((totalLosses, { goalsFavor, goalsOwn }) => {
      if (goalsFavor < goalsOwn) return totalLosses + 1;
      return totalLosses;
    }, 0);
    return getLosses;
  };

  public static TotalGoals = (getGoals:IGoalsInfo[]) => {
    const getGoalsFavor = getGoals.reduce((totalGols, { goalsFavor }) => totalGols + goalsFavor, 0);
    const getGoalsOwn = getGoals.reduce((totalGols, { goalsOwn }) => totalGols + goalsOwn, 0);
    const getGoalsBalance = getGoalsFavor - getGoalsOwn;

    return { getGoalsFavor, getGoalsOwn, getGoalsBalance };
  };

  public static TotalEfficiency = (totalPoints: number, totalGames: number) => {
    const efficiency = (totalPoints / (totalGames * 3)) * 100;
    return Number(efficiency.toFixed(2));
  };

  public static homeResults = (team: string, matches:IGoalsInfo[]) => {
    const totalGames = matches.length;
    const totalGoals = this.TotalGoals(matches);
    const totalPoints = this.TotalPoints(matches);
    const totalVictories = this.TotalVictories(matches);
    const totalDraws = this.TotalDraws(matches);
    const totalLosses = this.TotalLosses(matches);
    const efficiency = this.TotalEfficiency(totalPoints, totalGames);

    return { name: team,
      totalPoints,
      totalGames,
      totalVictories,
      totalDraws,
      totalLosses,
      goalsFavor: totalGoals.getGoalsFavor,
      goalsOwn: totalGoals.getGoalsOwn,
      goalsBalance: totalGoals.getGoalsBalance,
      efficiency,
    };
  };
}
