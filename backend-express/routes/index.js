const express = require("express");
const router = express.Router();
const registerController = require("../controllers/RegisterController.js");
const { validateRegister } = require("../utils/validators/auth");

//define route for register
router.post("/register", validateRegister, registerController.register);

module.exports = router;
