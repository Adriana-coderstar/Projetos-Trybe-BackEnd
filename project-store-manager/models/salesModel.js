const connection = require('./connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT 
      sp.sale_id AS saleId,
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales_products AS sp
    JOIN StoreManager.sales AS s
    WHERE sp.sale_id = s.id
    GROUP BY sp.sale_id, sp.product_id, sp.quantity, s.date
    ORDER BY sp.sale_id, sp.product_id ASC`,
  );
  return sales;
};

const getSaleById = async (id) => {
  const [salesId] = await connection.execute(
    `SELECT 
      s.date,
      sp.product_id AS productId,
      sp.quantity
    FROM StoreManager.sales_products AS sp
    JOIN StoreManager.sales AS s
    ON sp.sale_id = s.id
    WHERE sp.sale_id=?`, [id],
  );

  return salesId;
};

const createSaleId = async () => {
  const [sales] = await connection.execute(
  'INSERT INTO StoreManager.sales () VALUES ();',
  );

  return sales.insertId;
};

const createSale = async (saleId, productId, quantity) => {
  const [query] = await connection.execute(
    'INSERT INTO StoreManager.sales_products(sale_Id, product_Id, quantity) VALUES (?, ?, ?);',
    [saleId, productId, quantity],
  );

  return query;
};

const updateSale = async (quantity, saleId, productId) => {
  const query = `
    UPDATE StoreManager.sales_products SET quantity=? WHERE sale_Id=? AND product_id=?;`;

  const [result] = await connection.execute(query, [quantity, saleId, productId]);

  return result;
};

module.exports = { getAllSales, getSaleById, createSaleId, createSale, updateSale };