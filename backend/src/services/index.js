import { loginUser } from "./loginUser.js";
import { registerUser } from "./registerUser.js";
import { verifyUserEmail } from "./verifyUserEmail.js";

export const UserService = {
  registerUser,
  loginUser,
  // refreshToken,
  // searchUsersByName,
  // deleteUser,
  // followUser,
  // unfollowUser,
  // getFeedForUser,
  verifyUserEmail,
  // getUserById,
};
