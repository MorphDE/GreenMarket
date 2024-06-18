import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    item: [
      {
        itemId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        itemName: { type: String, required: true },
      },
    ],
  },
  { collection: "cart", timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
