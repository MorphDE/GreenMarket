import express from "express";
import {
  doJwtAuth,
  validateRefreshTokenInCookieSession,
} from "../../middlewares/doJwtAuth.js";
import { ProductController } from "../controllers/productController.js";

export const productRouter = express
  .Router()
  .post("/newProduct", ProductController.postCreateProductCtrl)
  .get("/getAllProducts", ProductController.getAllProductsCtrl)
  .patch("/updateProduct/:productId", ProductController.updateProductCtrl)
  .get("/getProductById/:productId", ProductController.getProductByIdCtrl);
