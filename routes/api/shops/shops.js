const express = require("express");
const createError = require("http-errors");

const { Shop } = require("../../../models")

const router = express.Router();

router.get("/", async (req, res, next) => { 
    try {
        const shops = await Shop.find()
        res.json(shops)
    } catch (error) {
       next(error)

    }
})

module.exports = router;