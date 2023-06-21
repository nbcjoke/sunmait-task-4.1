const Router = require("express").Router;
const router = new Router();
const { body } = require("express-validator");

const authMiddleware = require("../middlewares/auth-middleware");
const userController = require("../controllers/user-controller");
const opportunityController = require("../controllers/opportunity-controller");

router.post("/login", userController.login);
router.post(
  "/signup",
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username must contain at least 3 characters"),
  body("password")
    // .isStrongPassword({
    //   minLength: 4,
    //   minLetters: 1,
    //   minNumbers: 1,
    // })
    .matches(/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{4,}$/, "i")
    .withMessage(
      "Password must contain at least 1 number and 1 letter and must be over 4 characters"
    ),
  body("confirmPassword")
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage("Passowrds do not match"),
  body("firstname")
    .isLength({ min: 3 })
    .withMessage("Username must contain at least 3 characters"),
  body("lastname")
    .isLength({ min: 3 })
    .withMessage("Username must contain at least 3 characters"),
  body("age").isInt({ min: 1 }).withMessage("Age must be over 0"),
  userController.registration
);
router.get("/refresh", userController.refresh);

router.get(
  "/opportunities",
  authMiddleware,
  opportunityController.getOpportunities
);

module.exports = router;
