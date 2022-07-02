const { Schema, model } = require("mongoose");

const shopSchema = Schema({
    market: String,
    name: String,
}, {versionKey: false,   _id: false});

const Shop = model("shop", shopSchema);

module.exports = Shop;