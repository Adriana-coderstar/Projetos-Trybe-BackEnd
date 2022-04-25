const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../../models/connection');

const ProductController = require('../../../controllers/productController');

const ProductModel = require('../../../models/productModel');

const ProductService = require('../../../services/product.service');

describe('Testar o controller dos produtos  ', () => {
  const request = {};
  const response = {};
  let next = {};

  const products =[
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
  
  describe('Testar a função "getAllProduct"', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      next = sinon.stub().returns();
      sinon.stub(ProductModel, 'getAllProduct').resolves(products);
    });

    afterEach(()=> {
      ProductModel.getAllProduct.restore();
    })
    
    it('Verifica se responde a requisição com "status 200"', async () => {
      await ProductController.getAllProduct(request, response, next);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('Verifica se a resposta do "json" é um array de objeto', async () => {
      await ProductController.getAllProduct(request, response, next);
      
      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });

  describe('Testar a função productById', () => {
    const request = {};
    const response = {};
    let next = {}; 

    const productId = [
      {
        "id": 1,
        "name": "Martelo de Thor",
        "quantity": 10
      }
    ] 
      
    beforeEach(() => {
      request.params = { id: 1 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      next = sinon.stub().returns();
      sinon.stub(ProductModel, 'getById').resolves(productId);
    });

    afterEach(()=> {
      ProductModel.getById.restore();
    });

    describe('Verifica que existe um produto com ID informado', () => {
      it('Verifica se a requisição responde com "status 200"', async () => {
        await ProductController.productById(request, response, next);
  
        expect(response.status.calledWith(200)).to.be.equal(true);
      });

      it('Verifica se a resposta do "json" é um array de objeto',async () => {
        await ProductController.productById(request, response, next);

        expect(response.json.calledWith(productId[0])).to.be.equal(true);
      });
    });
  });

  describe('Verifica quando não existe o ID informado', () => {
    const request = {};
    const response = {};

    beforeEach(() => {
      request.params = { id: 5 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      next = sinon.stub().returns();
      sinon.stub(ProductModel, 'getById').resolves([]);
    });

    afterEach(()=> {
      ProductModel.getById.restore()
    });

    it('Verifica se requisição responde com "status 404"', async () => {
      await ProductController.productById(request, response,next);

      expect(response.status.calledWith(404)).to.be.equal(true)
    });

    it('Verifica se a mensagem responde como "Product not found"', async () => {
      await ProductController.productById(request, response,next);

      expect(response.json.calledWith({message: "Product not found"})).to.be.equal(true);
    });
  });
  
  describe('Testar se cadastra produto no BD', () => {
    const request = {};
    const response = {};

    beforeEach(() => {
      request.body = {
        id: 4,
        name: "Arco do Gavião Arqueiro",
        quantity: 1
      };
    });  
    
    response.status = sinon.stub().returns(response);
    response.send = sinon.stub().returns();

    sinon.stub(ProductService, 'createProduct').resolves(true);

    afterEach(() => {
      ProductService.createProduct.restore();
    });

    it('Verifica se requisição responde com "status 201" criado cm sucesso', async () => {  
      await ProductController.createNewProduct(request, response, next);

      expect(response.status.calledWith(201)).to.be.true;
    });
  });
});
