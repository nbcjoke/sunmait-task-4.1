const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();

router.post("/login", userController.login);

module.exports = router;