const { body } = require("express-validator");
const prisma = require("../../prisma/client/index.js");

const validateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is invalid")
    .costum(async (value, { req }) => {
      if (!value) {
        throw new Error("Email is required");
      }
      const user = await prisma.user.findUnique({ where: { email: value } });
      if (user && user.id !== Number(req.params.id)) {
        throw new Error("Email already in use");
      }
      return true;
    }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];
