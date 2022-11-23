const connection = require('./connection');

const findAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT
      sp.sale_id AS saleId,
      sa.date,
      sp.product_id AS productId,
      sp.quantity
     FROM StoreManager.sales AS sa
     INNER JOIN StoreManager.sales_products AS sp 
      ON sa.id = sp.sale_id
     ORDER BY sp.sale_id, sp.product_id`,
  );
  return result;
};

const findSalesById = async (saleId) => {
  const [product] = await connection.execute(
    `SELECT
      sp.product_id AS productId,
      sa.date,
      sp.quantity
     FROM StoreManager.sales_products AS sp
     INNER JOIN StoreManager.sales AS sa
      ON sa.id = sp.sale_id
      WHERE sa.id = ?
     ORDER BY sp.sale_id, sp.product_id;`,
    [saleId],
  );
  return product;
};

module.exports = {
  findAllSales,
  findSalesById,
};