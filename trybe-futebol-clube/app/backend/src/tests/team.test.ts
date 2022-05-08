import * as chai from "chai";
import * as sinon from "sinon";
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from "../database/models/Team";

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste se a rota Teams retorna todos os times corretament', () => {
  const mockTeams = [
    {
      "id": 1,
      "teamName": "Avaí/Kindermann"
    },
    {
      "id": 2,
      "teamName": "Bahia"
    },
    {
      "id": 3,
      "teamName": "Botafogo"
    },
  ]
  
  before(async () => {
    sinon
    .stub(Teams, "findAll")
    .resolves(
      mockTeams as Teams[]
    )  
  });

  after(() => {
    (Teams.findAll as sinon.SinonStub).restore();
  });

  it('Teste o status "200" e retorna todos os times',() => {
    chai
    .request(app)
    .get('/teams')
    .then((res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.deep.equal(mockTeams)
    });
  });

  it('Testa o status "200" e se retorna o time pelo "id"',() => {
    chai
    .request(app)
    .get('/teams/2')
    .then((res) => {
      expect(res).to.have.status(200)
      expect(res.body).to.be.deep.equal(mockTeams[2])
    });
  });
});

