const { Schema, model } = require("mongoose");


const productSchema = Schema({
    name: String,
    price: Number,
    market: String,
    quantity: Number
}, {versionKey: false, timestamps: true});

const Product = model("product", productSchema);

module.exports = Product;