const fs = require("fs/promises");

const orderPath = require("./orderPath");
 
const updateBasket = async (orders) => {
    await fs.writeFile(orderPath, JSON.stringify(orders, null, 2));
}

module.exports = updateBasket;