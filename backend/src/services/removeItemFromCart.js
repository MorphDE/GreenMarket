import Cart from "../models/Cart.js";

export async function removeItemFromCart({ userId, productId }) {
  const cart = await Cart.findOne({ userId });

  if (!cart) {
    throw new Error("Cart not found for this user");
  }

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex === -1) {
    throw new Error("Product not found in cart");
  }

  cart.items.splice(itemIndex, 1);

  await cart.save();

  return cart;
}
