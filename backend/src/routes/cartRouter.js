import express from "express";
import { CartController } from "../controllers/cartController.js";
import { doJwtAuth } from "../../middlewares/doJwtAuth.js";

export const cartRouter = express
  .Router()
  .post("/addToCart", doJwtAuth, CartController.postAddToCartCtrl)
  .post("/removeItem", doJwtAuth, CartController.postRemoveItemFromCartCtrl)
  .get("/getCart", doJwtAuth, CartController.getCartCtrl);
