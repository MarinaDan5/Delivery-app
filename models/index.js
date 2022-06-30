const fs = require("fs/promises");
const { v4 } = require("uuid");


const productsPath = require("../routes/api/products/productsPath");
const basketPath = require("../routes/api/basket/orderPath");
const updateBasket = require("../routes/api/basket/updateBasket");

const getAll = require("../routes/api/products/getAll");
const getOrders = require("../routes/api/basket/getOrders");

const listProducts = async () => {
 const data = await fs.readFile(productsPath);
  const products = JSON.parse(data);
  return products;
};

const getProductById = async (id) => {
  const products = await getAll();
  const result = products.find(item => item._id === id)
  if (!result) { 
    return null;
  }
  return result;
};

const getProductByMarket = async (market) => {
  const products = await getAll();
  const result = products.filter(item => item.market === market)
  if (!result) { 
    return null;
  }
  return result;
};

// const removeProducts = async (id) => {
//   const products = await getAll();
//   const idx = products.findIndex(item => item.id === id);
//   if (idx === -1) {
//     return null;
//   };
// }


const addToBasket = async (body) => {
  const newOrder = { ...body};
  const orders = await getOrders();
  orders.push(newOrder);
  await updateBasket(orders);
  return newOrder;
};

// const updateProducts = async (id, body) => {
//  }


module.exports = {
  listProducts,
  getProductById,
  getProductByMarket,
  addToBasket
  // removeProducts,
  // addProducts,
  // updateProducts,
};