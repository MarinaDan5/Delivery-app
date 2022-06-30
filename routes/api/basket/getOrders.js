const fs = require("fs/promises");

const orderPath = require("./orderPath");

const getOrders = async () => {
  const data = await fs.readFile(orderPath);
  const orders = JSON.parse(data);
  return orders;
};

module.exports = getOrders;