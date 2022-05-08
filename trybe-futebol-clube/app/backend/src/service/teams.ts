import Team from '../database/models/Team';

export default class TeamService {
  public static async getAllTeams() {
    const findAllTeams = await Team.findAll();

    return findAllTeams;
  }

  public static async getTeamsById(id: number) {
    const findTeamsById = await Team.findByPk(id);

    return findTeamsById;
  }
}
