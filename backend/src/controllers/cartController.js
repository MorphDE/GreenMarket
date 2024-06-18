import { CartService } from "../services/index.js";

export async function postAddToCartCtrl(req, res) {
  try {
    const cartInfo = {
      userId: req.authenticatedUserId,
      productId: req.body.productId,
      quantity: req.body.quantity,
    };

    const result = await CartService.addToCart(cartInfo);

    res.json({ result });
  } catch (err) {
    console.log("Error adding to cart:", err);
    res.status(500).json({ err, message: err.message });
  }
}

export async function postRemoveItemFromCartCtrl(req, res) {
  try {
    const cartUpdate = {
      userId: req.authenticatedUserId,
      productId: req.body.productId,
    };

    if (!cartUpdate.userId || !cartUpdate.productId) {
      return res
        .status(400)
        .json({ message: "userId and productId are required" });
    }

    const result = await CartService.removeItemFromCart(cartUpdate);
    res.json({ result });
  } catch (err) {
    console.log("Error removing from cart:", err);
    res.status(500).json({ err, message: err.message });
  }
}

export async function getCartCtrl(req, res) {
  try {
    const userId = req.authenticatedUserId;

    if (!userId) {
      return res.status(400).json({ message: "userId is required" });
    }

    const cart = await CartService.getCart(userId);
    res.json({ cart });
  } catch (err) {
    console.log("Error fetching cart:", err);
    res.status(500).json({ err, message: err.message });
  }
}

export const CartController = {
  postAddToCartCtrl,
  postRemoveItemFromCartCtrl,
  getCartCtrl,
};
