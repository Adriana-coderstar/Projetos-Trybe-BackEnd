const salesModel = require('../models/salesModel');

const createSale = async (sales) => {
  const saleId = await salesModel.createSaleId();

  const arrayPromise = sales.map((data) => (
    salesModel.createSale(saleId, data.productId, data.quantity)));
  await Promise.all(arrayPromise);
    
  const dataSale = { id: saleId, itemsSold: sales };
  return dataSale;
};

const updateSales = async (saleId, productSale) => {  
  const arrayPromise = productSale.map(({ quantity, productId }) => (
    salesModel.updateSale(quantity, saleId, productId)
  ));

  await Promise.all(arrayPromise);
  
  const dataSales = { saleId, itemUpdated: productSale };

  return dataSales; 
};

module.exports = { createSale, updateSales }; 