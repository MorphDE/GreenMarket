import { deleteUser } from "./deleteUser.js";
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
