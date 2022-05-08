import { Router } from 'express';
import TeamsController from '../controller/teams';

const routerTeams = Router();

routerTeams.get('/', TeamsController.getTeams);
routerTeams.get('/:id', TeamsController.getTeamById);

export default routerTeams;
