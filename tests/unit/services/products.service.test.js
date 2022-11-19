const { expect } = require('chai');
const sinon = require('sinon');
const { findAll, findById } = require('../../../src/services/products.service');
const { productsModel } = require('../../../src/models');


const { products, invalidID } = require('./mocks/products.service.mock');

describe('Verificando service de produtos', function () {
  describe('listagem de produtos', function () {
    it('retorna a lista completa de produtos', async function () {
      sinon.stub(productsModel, 'findAll').resolves(products);

      const result = await findAll();

      expect(result.message).to.deep.equal(products);
    });

    it('retorna um erro caso receba um ID inválido', async function () {

      const result = await findById(invalidID);

      expect(result.type).to.equal('INVALID_VALUE');
      expect(result.message).to.equal('"id" must be a number');
    });

    it('retorna um erro caso o ID não exista', async function () {
      sinon.stub(productsModel, 'findById').resolves(undefined);

      const result = await findById(1);

      expect(result.type).to.equal('ID_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });

    it('retorna o produto do ID existente', async function () {
      sinon.stub(productsModel, 'findById').resolves(products[0]);

      const result = await findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(products[0]);
    });
  });

    afterEach(function () {
      sinon.restore();
    });
  });
