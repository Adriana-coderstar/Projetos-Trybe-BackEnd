const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');

const SalesController = require('../../../controllers/salesController');

const SalesModel = require('../../../models/salesModel');

const SalesService = require('../../../services/sales.service');

describe('Testar o controller dos "Sales"  ', () => {
  const request = {};
  const response = {};
  let next = {};

  const sales = [
    {
      "saleId": 1,
      "date": "2022-02-26T17:48:31.000Z",
      "productId": 1,
      "quantity": 5
    },
    {
      "saleId": 1,
      "date": "2022-02-26T17:48:31.000Z",
      "productId": 2,
      "quantity": 10
    },
    {
      "saleId": 2,
      "date": "2022-02-26T17:48:31.000Z",
      "productId": 3,
      "quantity": 15
    }
  ]

  describe('Testar a função getAllSales', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      next = sinon.stub().returns();
      sinon.stub(SalesModel, 'getAllSales').resolves(sales);
    });

    afterEach(()=> {
      SalesModel.getAllSales.restore();
    })
    
    it('Verifica se responde a requisição com "status 200"', async () => {
      await SalesController.getAllSales(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('Verifica se a resposta do "json" é um array de objeto', async () => {
      await SalesController.getAllSales(request, response, next);
      
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Testar a função "getByIdSales"', () => {
    const request = {};
    const response = {};
    let next = {}; 


    const salesId = [
      {
        "date": "2022-02-26T17:48:31.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "date": "2022-02-26T17:48:31.000Z",
        "productId": 2,
        "quantity": 10
      }
    ]
      
    beforeEach(() => {
      request.params = { id: 1 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      next = sinon.stub().returns();
      sinon.stub(SalesModel, 'getSaleById').resolves(salesId);
    });

    afterEach(()=> {
      SalesModel.getSaleById.restore();
    });

    describe('Verifica que existe um produto com ID informado', () => {
      it('Verifica se a requisição responde com "status 200"', async () => {
        await SalesController.getByIdSales(request, response, next);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('Verifica se a resposta do "json" é um array de objeto',async () => {
        await SalesController.getByIdSales(request, response, next);

        expect(response.json.calledWith(salesId)).to.be.equal(true);
      });
    });
  });

    describe('Verifica quando não existe o ID informado', () => {
      const request = {};
      const response = {};

      beforeEach(() => {
        request.params = { id: 8 };
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        next = sinon.stub().returns();
        sinon.stub(SalesModel, 'getSaleById').resolves([]);
      });
  
      afterEach(()=> {
        SalesModel.getSaleById.restore();
      });

      it('Verifica se requisição responde com "status 404"', async () => {
        await SalesController.getByIdSales(request, response, next);

        expect(response.status.calledWith(404)).to.be.equal(true)
      });

      it('Verifica se a mensagem responde como "Sale not found"', async () => {
        await SalesController.getByIdSales(request, response, next);

        expect(response.json.calledWith({message: "Sale not found"})).to.be.equal(true);
      });
    });

    describe('Testar a função "createSales" para cadastro das vendas de produtos', () => {
      const createSale = {
        "id": 3,
        "itemsSold": [
          {
            "productId": 1,
            "quantity": 3
          }
        ]
      }

      const request = {};
      const response = {};

      beforeEach(() => {
        response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
        next = sinon.stub().returns();
        sinon.stub(SalesService, 'createSale').resolves(createSale);
      });
  
      afterEach(()=> {
        SalesService.createSale.restore();
      });

      it('Verifica se requisição da função "createSale" responde com "status 201"', async () => {
        await SalesController.createSales(request, response, next);

        expect(response.status.calledWith(201)).to.be.equal(true)
      });
    });
});
