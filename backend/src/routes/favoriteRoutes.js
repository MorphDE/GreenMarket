import express from "express";
import { doJwtAuth } from "../../middlewares/doJwtAuth.js";
import { FavoriteController } from "../controllers/favoriteController.js";

export const favoriteRouter = express
  .Router()
  .post("/addFavorite", doJwtAuth, FavoriteController.addFavoriteCtrl)
  .delete("/removeFavorite", doJwtAuth, FavoriteController.removeFavoriteCtrl);
