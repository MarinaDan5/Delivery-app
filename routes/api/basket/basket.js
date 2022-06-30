const express = require("express");
const createError = require("http-errors");
const Joi = require("joi");

const productOperations = require("../../../models")

const router = express.Router();

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


router.post("/", async (req, res, next) => { 
    try {
        const { error } = joiSchema.validate(req.body);
        if (error) { 
            error.status = 400;
            throw error;
        }
        const newOrder = await productOperations.addToBasket(req.body);
       res.status(201).json(newOrder);
    } catch (error) {
       next(error)

    }
  
})

module.exports = router;

// [
//   {
//     "id": "1",
//     "name": "Salad",
//     "email": "1500",
//     "phone": "ATB",
//     "address":"ATB",
//     "order": [{
//         "idGood": "1500",
//         "guantity": "ATB"
//         }],
//     "totalPrice":"10"
//   }]