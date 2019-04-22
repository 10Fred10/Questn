const express = require("express");
const router = express.Router();
const rewardController = require("../controllers/reward.controller");
const middleware = require('../controllers/middleware');

/********************* CRUD *********************/
router.post("/create",middleware.checkToken, rewardController.createReward);
router.get("/:id",middleware.checkToken, rewardController.readReward);
router.put("/:id",middleware.checkToken, rewardController.updateReward);
router.delete("/:id",middleware.checkToken, rewardController.deleteReward);

module.exports = router;
