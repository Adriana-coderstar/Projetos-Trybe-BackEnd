import * as chai from "chai";
import * as sinon from "sinon";
import chaiHttp = require('chai-http');

import { app } from '../app';

import Users from '../database/models/User';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teste "email" invalido', () => {
  before(async () => {
    sinon
    .stub(Users, "findOne")
    .resolves({
      email: 'admin@admin.com',
      password: 'secret_admin'
    }as Users);
  });

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  });

  it('Teste o retorno de erro "401" em casos de "email" invalido',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': 'emailInvalido',
      'password': 'secret_admin',
    }).then((res) => expect(res).to.have.status(401));
  });

  it('Testa a mensagem "Incorrect email or password" para "email" invalido',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': 'emailInvalido',
      'password': 'secret_admin',
    }).then((res) => expect(res.text).to.be.equal({
      message: "Incorrect email or password"
    }));
  });
});

describe('Teste "password" invalido', () => {
  before(async () => {
    sinon
    .stub(Users, "findOne")
    .resolves({
      email: 'admin@admin.com',
      password: 'secret_admin'
    }as Users);
  });

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  });

  it('Teste o retorno "401" em casos de "password" invalido',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': 'admin@admin.com',
      'password': 'senhaInvalida',
    }).then((res) => expect(res).to.have.status(401));
  });

  it('Teste a mensagem "Incorrect email or password" para "password" invalido',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': 'admin@admin.com',
      'password': 'senhaInvalida',
    }).then((res) => expect(res.text).to.be.equal({
      message: "Incorrect email or password"
    }));
  });

  it('Teste o retorno se o password "não" possui o minimo de caracteres "6"',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': 'admin@admin.com',
      'password': 'sen',
    }).then((res) => expect(res).to.have.status(401));
  });
});

describe('Teste o "field email ou password" com valor vazio', () => {
  before(async () => {
    sinon
    .stub(Users, "findOne")
    .resolves({} as any);
  });

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  });
  
  it('Teste o retorno "400" em casos de "email" com valor vazio',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': '',
      'password': 'senhaInvalida',
    }).then((res) => expect(res).to.have.status(400));
  });

  it('Teste a mensagem "All fields must be filled" em casos de "email ou password" com valor vazio',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': '',
      'password': '',
    }).then((res) => expect(res.text).to.be.equal({
      message: "All fields must be filled"
    }));
  });
});

describe('Testar se o login foi efetuado com sucesso', () => {
  const mockResponseLogin = {
    user: {
      id: 1,
      username: 'Admin',
      role: 'admin',
      email: 'admin@admin.com',
      password: 'secret_admin', 
    },
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkFkbWluIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTY1MTI2MjAwMiwiZXhwIjoxNjUxODY2ODAyfQ.gcosczy7aPfXbpdWFhXe-3bQ_WCzV9QK2iD2HG1RI4Q'
  };

  before(async () => {
    sinon
    .stub(Users, "findOne")
    .resolves({
      email: 'admin@admin.com',
      password: 'secret_admin'
    }as Users);
  });

  after(() => {
    (Users.findOne as sinon.SinonStub).restore();
  });

  it('Testar o retorno "200"',() => {
    chai
    .request(app)
    .post('/login')
    .send({
      'email': 'admin@admin.com',
      'password': 'secret_admin',
    }).then((res) => expect(res).to.have.status(200));
  });

  it('Testar se retorna os dados correto',() => {
    chai
    .request(app)
    .post('/login')
    .then((res) => expect(res.body).to.be.equal(mockResponseLogin));
  });
});


