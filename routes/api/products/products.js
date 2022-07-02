const express = require("express");
const createError = require("http-errors");

const { Product } = require("../../../models")

const router = express.Router();

router.get("/", async (req, res, next) => { 
  try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
       next(error)

    }
})

// router.get("/:market/:id", async (req, res, next) => {
//     const { id } = req.params;
    
//     try {
//         const product = await Product.findById(id);
//         if (!product) {
//             throw new createError(404, "Not found");
//         }
        
//         res.json(product);
//     }
//     catch (error) {
//         next(error)

//     }
// })

router.get("/:marketId", async (req, res, next) => {
    const { marketId } = req.params;
    
    try {
        const product = await Product.find({market: marketId});
        if (!product) {
            throw new createError(404, "Not found");
        }
        
        res.json(product);
    }
    catch (error) {
        next(error)

    }
})

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
      const updateQuantityProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateQuantityProduct) {
      throw new createError(404, "Not found");
    }
    res.json(updateQuantityProduct);
  } catch (error) {
    if (error.message.includes("validation failed")) { 
            error.status = 400;
        }
    next(error);
  }
});

module.exports = router;