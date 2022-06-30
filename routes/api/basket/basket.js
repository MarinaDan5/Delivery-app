const express = require("express");
const createError = require("http-errors");
const Joi = require("joi");

const { Order } = require("../../../models");
const {joiSchema} = require("../../../models/order")

const router = express.Router();

router.post("/", async (req, res, next) => { 
    try {
        const { error } = joiSchema.validate(req.body);
        if (error) { 
            error.status = 400;
            throw error;
        }
        const newOrder = await Order.create(req.body);
       res.status(201).json(newOrder);
    } catch (error) {
        if (error.message.includes("validation failed")) { 
            error.status = 400;
        }
       next(error)

    }
})

module.exports = router;