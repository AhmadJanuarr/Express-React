const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/auth.js");
const registerController = require("../controllers/RegisterController.js");
const loginController = require("../controllers/LoginController.js");
const userController = require("../controllers/UserController.js");
const { validateRegister, validateLogin } = require("../utils/validators/auth");
const { validateUser } = require("../utils/validators/user");

//define route for register
router.post("/register", validateRegister, registerController.register);

router.post("/login", validateLogin, loginController.login);

router.get("/admin/users", verifyToken, userController.findUsers);

router.post(
  "/admin/users",
  verifyToken,
  validateUser,
  userController.createUser
);

router.get("/admin/users/:id", verifyToken, userController.findUserById);

router.post("/admin/users/:id", verifyToken, userController.updateUser);

router.delete("/admin/users/:id", verifyToken, userController.deleteUser);
module.exports = router;
