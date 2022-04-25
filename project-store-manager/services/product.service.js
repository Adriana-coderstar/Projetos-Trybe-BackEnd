const productModel = require('../models/productModel');

const createProduct = async (name, quantity) => {
  const listProducts = await productModel.getAllProduct();

  const checkName = listProducts.find((product) => product.name === name);

  if (checkName) {
    return null;
  }
  return productModel.registerProduct(name, quantity);
};

const updateProductService = async (id, name, quantity) => {
  const listProducts = await productModel.getAllProduct();
  
  const checkProductExist = listProducts.filter((p) => p.id === Number(id));
  
  if (checkProductExist.length === 0) {
    return null;
  }
  return productModel.updateProduct(id, name, quantity);
};

const deleteProduct = async (id) => {
  const productId = await productModel.getById(id);
  
  const checkProductExist = productId.filter((p) => p.id === Number(id));
  
  if (checkProductExist.length === 0) {
    return null;
  }
  return productModel.deleteProduct(id);
};

module.exports = { createProduct, updateProductService, deleteProduct };
