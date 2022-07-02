const { Schema, model } = require("mongoose");

const shopSchema = Schema({
    name: String,
}, {versionKey: false});

const Shop = model("shop", shopSchema);

module.exports = Shop;