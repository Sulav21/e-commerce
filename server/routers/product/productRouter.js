import express from "express";
import {
  getProductById,
  getProducts,
  insertProduct,
  updateProduct,
} from "../../model/product/Product.Model.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await getProducts();
    res.status(201).json({
      status: "success",
      result,
    });
  } catch (error) {
    next(error);
  }
});

// Admin Route
router.post("/", async (req, res, next) => {
  try {
    const result = await insertProduct(req.body);
    result?._id
      ? res.status(201).json({
          status: "success",
          message: "Product added successfully",
        })
      : res.status(400).json({
          status: "error",
          message: "There was an error adding products",
        });
  } catch (error) {
    next(error);
  }
});

// Admin Route
router.put("/update/:_id?", async (req, res, next) => {
  try {
    const product = await getProductById(req.params._id);

    if (!product) {
      return res.json({
        status: "error",
        message: "No product found in the database",
      });
    }
    
    product = await updateProduct(_id,req.body)
    res.status(200)({
        status:'success',
        product
    })
  } catch (error) {
    next(error);
  }
});

export default router;
