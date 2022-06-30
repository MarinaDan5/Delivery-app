const { Schema, model } = require("mongoose");
const Joi = require("joi");

const ordersSchema = Schema({
  name: {
    type: String,
    required: true
  },
    email: {
    type: String,
    required: true
  },
    phone:{
    type: Number,
    required: true
  },
    address:{
    type: String,
    required: true
  },
order: [
      {
        idGood: Number,
        quantity: String
      }
    ],
    totalPrice: Number
}, {versionKey: false, timestamps: true});

const good = Joi.object().keys({
    idGood: Joi.string(),
    quantity: Joi.string(),
});

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),   
    phone: Joi.string().min(10).required(),
    address: Joi.string().required(),
    order: Joi.array().items(good),
    totalPrice: Joi.string()
});

const Order = model("order", ordersSchema);

module.exports = { Order, joiSchema };