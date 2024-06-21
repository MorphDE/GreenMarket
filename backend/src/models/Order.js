import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    orderStatus: {
      type: String,
      enum: orderStatusEnum,
      default: "Pending",
    },
    paymentStatus: {
      type: String,
      enum: paymentStatusEnum,
      default: "Pending",
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      street: { type: String, required: true },
      houseNumber: { type: String, required: true },
      city: { type: String, required: true },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "orders", timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
