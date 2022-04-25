const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');

const ProductModel = require('../../../models/productModel');

const mockProducts = [
    {
      "id": 1,
      "name": "Martelo de Thor",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
      "quantity": 20
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América",
      "quantity": 30
    }
]

describe('Testar o model dos produtos  ', () => {
  beforeEach(async () => {
    sinon.stub(connection, 'execute').resolves([mockProducts]);
  });

  afterEach(async () => {
    connection.execute.restore();
  });

  describe('Testar o retorno do BD dos produtos', () => {
    it('Verifica se a função "getAllProduct" retornar um "array de objetos"', async () => {
      const response = await ProductModel.getAllProduct();

      expect(response).to.be.an('array');
      response.forEach(product => expect(product).to.be.an('object'));
    })

    it('Verifica se cada objeto no array compõe as chaves "id, name, quantity"', async () => {
      const response = await ProductModel.getAllProduct();

      response.forEach(product => expect(product).to.include.all.keys('id', 'name', 'quantity'));
    })
  });
  
  describe('Testar a busca de um produto no BD por seu "ID" na função "getById"', () => {
    const productId = {
      "id": 1,
      "name": "Martelo de Thor",
      "quantity": 10
    }

    it('Verifica o retorno da função  é um array de objeto' , async () => {
      const response = await ProductModel.getById(productId);

      expect(response).to.be.an('array');
    });

    it('Verifica se o objeto não está vazio', async () => {
      const response = await ProductModel.getById(productId);

      expect(response).to.be.not.empty;
    });

    it('Verifica se objeto possui as propriedades: "id", "name" e "quantity"', async () => {
      const response = await ProductModel.getById(productId);

      expect(response).to.be.an('array');

      response.forEach(product => expect(product).to.include.all.keys('id', 'name', 'quantity'));

    });
  });

  describe('Verifica se a função "registerProduct" é inserido com sucesso', () => {
    const newProduct = 	{
      "name": "Arco do Gavião Arqueiro",
      "quantity": 1
    }

    it('Verifica se retorna um objeto' , async () => {
    const response = await ProductModel.registerProduct(newProduct);

    expect(response).to.be.an('object')
    });

    it('Verifica se objeto possui o "id" do novo produto inserido', async () => {
      const response = await ProductModel.registerProduct(newProduct);
      
      expect(response).to.have.a.property('id')
    });    
  });

  describe('Verifica se a função "updateProduct" é inserido com sucesso', () => {
    const updateProduct = {
      "name": "Machado de Thor",
      "quantity": 20
    }

    it('Verifica se retorna um objeto' , async () => {
    const response = await ProductModel.updateProduct(updateProduct);

    expect(response).to.be.an('object')
    });

    it('Verifica se objeto possui o "id" do novo produto inserido', async () => {
      const response = await ProductModel.registerProduct(updateProduct);
      
      expect(response).to.have.a.property('id')
    });
  });
});
