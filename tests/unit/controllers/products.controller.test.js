const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');
const {
  products, createProduct, createProductWithId
} = require('./mocks/products.controller.mock');

describe('Teste de unidade do Controller', function () {
  it('Listando produtos', async function () {
    const res = {};
    const req = {};
    const productList = [products];

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findAll')
      .resolves({ type: null, message: productList });

    await productsController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productList);
  });

  it('Buscando um produto', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'findById')
      .resolves({ type: null, message: products[0] });

    await productsController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });

  it('Criando um novo produto', async function () {
    const res = {};
    const req = { body: createProduct };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, 'createProduct')
      .resolves({ type: null, message: createProductWithId });

      await productsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(createProductWithId);
  });
  afterEach(sinon.restore);
});
