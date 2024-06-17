import express from "express";
import { UserController } from "../controllers/userController.js";
import { doJwtAuth } from "../../middlewares/doJwtAuth.js";

export const userRouter = express
  .Router()
  //   .delete("/", doJwtAuth, UserController.deleteUserCtrl)
  //   .get("/userById/:userId", doJwtAuth, UserController.getUserByIdCtrl)
  .post("/register", UserController.postRegisterUserCtrl)
    .post("/login", UserController.postLoginUserCtrl)
  .post("/verifyEmail", UserController.postVerifyEmailCtrl);
//   .post(
//     "/refresh-token",
//     validateRefreshTokenInCookieSession,
//     UserController.postRefreshToken
//   );
