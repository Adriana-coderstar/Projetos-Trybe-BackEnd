const connection = require('./connection');

const getAllProduct = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [products] = await connection.execute(query, [id]);

  return products;
};

const registerProduct = async (name, quantity) => {
  const [query] = await connection.execute(
    'INSERT INTO StoreManager.products(name, quantity) VALUES (?, ?);',
  [name, quantity],
  );
  
  return {
    id: query.insertId,
    name,
    quantity,
  };
};

const updateProduct = async (id, name, quantity) => {
  const [query] = await connection.execute(
    'UPDATE StoreManager.products SET name=?, quantity=? WHERE id=?;',
    [id, name, quantity],
  );

  return {
    id: query.insertId,
    name,
    quantity,
  };
};

const deleteProduct = async (id) => {
  const [query] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id=?;',
    [id],
  );

  return query;
};

module.exports = { 
  getAllProduct, 
  getById, 
  registerProduct, 
  updateProduct, 
  deleteProduct,
}; 