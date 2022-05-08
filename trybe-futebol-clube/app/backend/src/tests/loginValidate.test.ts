import * as chai from "chai";
import * as sinon from "sinon";
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste "email" invalido', () => {
  it('Testar se retorna o role "admin"',() => {
    chai
    .request(app)
    .get('/login/validate')
    .set({
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1MTI2MjAwMiwiZXhwIjoxNjUxODY2ODAyfQ.gcosczy7aPfXbpdWFhXe-3bQ_WCzV9QK2iD2HG1RI4Q'
    })
      .then((res) => expect(res.text).to.be.equal('admin'));
  });

  it('Testar o retorno "401" e a mensagem "Token not found" na rota login/validate',() => {
    chai
    .request(app)
    .get('/login/validate')
    .send({
      Authorization: '',
    })
      .then((res) => expect(res.body).to.have.status(401))
      .then((res) => expect(res.text).to.be.equal('Token not found'))
  });
});
