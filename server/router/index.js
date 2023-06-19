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
    .isLength({ min: 4 })
    .withMessage("Password must at least contain 1 number and 1 letter"),
  body("repeatPassword")
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
  body("age").isLength({ min: 1, max: 28 }).withMessage("Age must be over 0"),
  userController.registration
);

router.get(
  "/opportunities",
  authMiddleware,
  opportunityController.getOpportunities
);

module.exports = router;
