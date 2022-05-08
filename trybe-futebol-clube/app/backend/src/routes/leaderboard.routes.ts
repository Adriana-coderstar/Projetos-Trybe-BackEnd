import { Router } from 'express';
import LeaderBoardController from '../controller/leaderBoard';

const routerLeaderBoard = Router();

routerLeaderBoard.get('/home', LeaderBoardController.getHome);

export default routerLeaderBoard;
