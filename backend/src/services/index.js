import { addCategory } from "./addCategory.js";
import { deleteCategory } from "./deleteCategory.js";
import { deleteUser } from "./deleteUser.js";
import { getAllCategories } from "./getAllCategories.js";
import { getOneCategory } from "./getOneCategory.js";
import { getUserById } from "./getUserById.js";
import { loginUser } from "./loginUser.js";
import { refreshToken } from "./refreshToken.js";
import { registerUser } from "./registerUser.js";
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

export const CategoriesService = {
  getAllCategories,
  getOneCategory,
  addCategory,
  deleteCategory,
};
