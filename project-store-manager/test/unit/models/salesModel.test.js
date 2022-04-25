const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');

const SalesModel = require('../../../models/salesModel');

const mockSales = [
	{
		"saleId": 1,
		"date": "2022-02-26T02:10:40.000Z",
		"productId": 1,
		"quantity": 5
	},
	{
		"saleId": 1,
		"date": "2022-02-26T02:10:40.000Z",
		"productId": 2,
		"quantity": 10
	},
	{
		"saleId": 2,
		"date": "2022-02-26T02:10:40.000Z",
		"productId": 3,
		"quantity": 15
	}
]

describe('Testar o model de sales', () => {
  beforeEach(async () => {
    sinon.stub(connection, 'execute').resolves([mockSales]);
  });

  afterEach(async () => {
    connection.execute.restore();
  });

  describe('Testar o retorno BD de sales', () => {
    it('Verifica se a função "getAllSales" retornar um "array"', async () => {
      const result = await SalesModel.getAllSales() ;
      expect(result).to.be.an('array');
    })

    it('Verifica o retorno da função "getSaleById" esta correta' , async () => {
      const result = await SalesModel.getSaleById();
      expect(result).to.be.an('array');
    })
  });

  describe('Testar a função "createSale" para cadastrar uma venda de produtos', () => {

    it('Verifica se a função retornar um array de objetos', async () => {
      const result = await SalesModel.createSale() ;
      expect(result).to.be.an('array');
    })

		it('o objeto não está vazio', async () => {
      const response = await SalesModel.createSale(1);

      expect(response).to.be.not.empty;
    });

    it('Verifica se a função "createSaleId" possui as propriedades: "date", "productId", "quantity", "saleId"' , async () => {
      const result = await SalesModel.createSale();

			result.forEach(sale => expect(sale).to.include.all.keys('date', 'productId', 'quantity', 'saleId'));
    })
  });

	describe('Testar a função "updateSale" para atualizar a venda de produtos', () => {

    it('Verifica se a função retornar um array de objetos', async () => {
      const result = await SalesModel.updateSale() ;
      expect(result).to.be.an('array');
    })

		it('o objeto não está vazio', async () => {
      const response = await SalesModel.updateSale(1);

      expect(response).to.be.not.empty;
    });

    it('Verifica se a função "createSaleId" possui as propriedades: "date", "productId", "quantity", "saleId"' , async () => {
      const result = await SalesModel.updateSale();

			result.forEach(sale => expect(sale).to.include.all.keys("date", "productId", "quantity", "saleId"));
    })
  });
});

