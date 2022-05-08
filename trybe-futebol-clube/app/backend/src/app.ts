import * as express from 'express';
import { routerLogin, routerTeams, routerMatches, routerLeaderBoard } from './routes/index';
import errorHandle from './middleware/errorHandle';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.routes();

    this.errorHandle();
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  private routes():void {
    this.app.use('/login', routerLogin);
    this.app.use('/teams', routerTeams);
    this.app.use('/matches', routerMatches);
    this.app.use('/leaderboard', routerLeaderBoard);
  }

  private errorHandle():void {
    this.app.use(errorHandle);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(`Listening at the door ${PORT}`);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
