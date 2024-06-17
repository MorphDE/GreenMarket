import { addProduct } from "./addProduct.js";
import { deleteUser } from "./deleteUser.js";
import { getAllProducts } from "./getAllProducts.js";
import { getProductById } from "./getProductById.js";
import { getUserById } from "./getUserById.js";
import { loginUser } from "./loginUser.js";
import { refreshToken } from "./refreshToken.js";
import { registerUser } from "./registerUser.js";
import { updateProduct } from "./updateProduct.js";
import { updateUser } from "./updateUser.js";
import { verifyUserEmail } from "./verifyUserEmail.js";

export const UserService = {
  registerUser,
  loginUser,
  refreshToken,
  updateUser,
  deleteUser,
  verifyUserEmail,
  getUserById,
};
export const ProductService = {
  addProduct,
  updateProduct,
  getAllProducts,
  getProductById,
};
