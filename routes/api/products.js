const express = require("express");
const createError = require("http-errors");

const productOperations = require("../../models")

const router = express.Router();

router.get("/", async (req, res, next) => { 
    try {
        const products = await productOperations.listProducts()
        res.json(products)
    } catch (error) {
       next(error)

    }
  
})

router.get("/:market/:id", async (req, res, next) => {
    const { id } = req.params;
    
    try {
        const product = await productOperations.getProductById(id);
        if (!product) {
            throw new createError(404, "Not found");
        }
        
        res.json(product);
    }
    catch (error) {
        next(error)

    }
})

router.get("/:market", async (req, res, next) => {
    const { market } = req.params;
    
    try {
        const product = await productOperations.getProductByMarket(market);
        if (!product) {
            throw new createError(404, "Not found");
        }
        
        res.json(product);
    }
    catch (error) {
        next(error)

    }

    
})


module.exports = router;