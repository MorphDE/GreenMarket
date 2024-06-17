import { UserService } from "../services/index.js";

export async function postRegisterUserCtrl(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserService.registerUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message });
  }
}

export async function postLoginUserCtrl(req, res) {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await UserService.loginUser(userInfo);
    if (result.tokens.refreshToken) {
      req.session.refreshToken = result.tokens.refreshToken; // refresh token in http only cookie session speichern
    }

    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message });
  }
}

// async function postRefreshToken(req, res) {
//   try {
//     const result = await UserService.refreshToken(req.authenticatedUserId);
//     res.json({ result });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err, message: err.message || "Could not register" });
//   }
// }

export async function postVerifyEmailCtrl(req, res) {
  try {
    const userId = req.body.userId;
    const sixDigitCode = req.body.sixDigitCode;
    const result = await UserService.verifyUserEmail({
      userId,
      sixDigitCode,
    });
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message });
  }
}
// export async function searchUsersByNameCtrl(req, res) {
//   try {
//     const { name } = req.query;

//     if (!name) {
//       return res
//         .status(400)
//         .json({ error: "Name query parameter is required" });
//     }

//     const result = await UserService.searchUsersByName({ name });
//     res.status(200).json({ result });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err, message: err.message });
//   }
// }
// async function deleteUserCtrl(req, res) {
//   try {
//     const authenticatedUserId = req.authenticatedUserId;
//     const result = await UserService.deleteUser({ authenticatedUserId });
//     res.json({ result });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ err, message: err.message || "Could not register" });
//   }
// }

// export async function followUserCtrl(req, res) {
//   try {
//     const userId = req.body.userId;
//     const authenticatedUserId = req.authenticatedUserId;
//     console.log(userId);
//     const result = await UserService.followUser({
//       authenticatedUserId,
//       userId,
//     });
//     res.status(200).json({ message: "User followed successfully", result });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

// export async function unfollowUserCtrl(req, res) {
//   try {
//     const userId = req.body.userId;
//     const authenticatedUserId = req.authenticatedUserId;
//     const result = await UserService.unfollowUser({
//       authenticatedUserId,
//       userId,
//     });
//     res.status(200).json({ message: "User unfollowed successfully", result });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }
// export async function getFeedsForUserCtrl(req, res) {
//   try {
//     const authenticatedUserId = req.authenticatedUserId;
//     if (!authenticatedUserId) {
//       return res.status(400).json({ error: "UserId is required" });
//     }
//     const result = await UserService.getFeedForUser(authenticatedUserId);
//     res.status(200).json({ result });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
// export async function getUserByIdCtrl(req, res) {
//   try {
//     const userId = req.params.userId;

//     if (!userId) {
//       return res.status(400).json({ error: "UserId is required" });
//     }
//     const result = await UserService.getUserById(userId);
//     res.status(200).json({ result });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }

export const UserController = {
  postRegisterUserCtrl,
  postLoginUserCtrl,
  //   postRefreshToken,
  postVerifyEmailCtrl,
  //   searchUsersByNameCtrl,
  //   deleteUserCtrl,
  //   followUserCtrl,
  //   unfollowUserCtrl,
  //   getFeedsForUserCtrl,
  //   getUserByIdCtrl,
};
