//import express validator

const { body } = require("express-validator");

//import prisma
const prisma = require("../../prisma/client/index.js");

//define validation to register
const validateRegister = [
  body("name").notEmpty().withMessage("Name is Required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is invalid")
    .custom(async (value) => {
      if (!value) {
        throw new Error("Email is required");
      }
      const user = await prisma.user.findUnique({
        where: {
          email: value,
        },
      });
      if (user) {
        throw new Error("Email already in use");
      }
      return true;
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

//define validation to login

const validateLogin = [
  body("email").notEmpty().withMessage("Email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
];

module.exports = { validateRegister, validateLogin };
