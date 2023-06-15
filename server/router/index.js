const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const opportunityController = require("../controllers/opportunity-controller");
const router = new Router();

router.post("/login", userController.login);
router.get("/opportunities", opportunityController.getOpportunities);

module.exports = router;
