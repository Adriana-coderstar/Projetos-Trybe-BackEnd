import { Router } from 'express';
import MatchesController from '../controller/matches';
import tokenValidate from '../middleware/auth.middleware';

const routerMatches = Router();

routerMatches.get('/', MatchesController.getMatches);
routerMatches.post('/', tokenValidate, MatchesController.CreateMatch);

routerMatches.patch('/:id/finish', MatchesController.FinishMatch);
routerMatches.patch('/:id', MatchesController.EditMatch);

export default routerMatches;
