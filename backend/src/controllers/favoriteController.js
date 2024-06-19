import { FavoriteService } from "../services/index.js";

export async function addFavoriteCtrl(req, res) {
  const productId = req.body.productId;
  const userId = req.authenticatedUserId;
  try {
    const result = await FavoriteService.addFavorite(userId, productId);
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error adding favorite:", error.message);
    res
      .status(500)
      .json({ error: "Internal server error while adding favorite." });
  }
}

export async function removeFavoriteCtrl(req, res) {
  const productId = req.body.productId;
  const userId = req.authenticatedUserId;

  try {
    await FavoriteService.removeFavorite(userId, productId);
    res
      .status(200)
      .json({ message: "Product removed from favorites successfully" });
  } catch (error) {
    console.error("Error removing favorite:", error.message);
    res.status(500).json({ error: "Failed to remove product from favorites" });
  }
}

export const FavoriteController = {
  addFavoriteCtrl,
  removeFavoriteCtrl,
};
