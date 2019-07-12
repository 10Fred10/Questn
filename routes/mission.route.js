const express = require("express");
const router = express.Router();
const missionController = require("../controllers/mission.controller");
const middleware = require("../controllers/middleware");

/********************* CRUD *********************/
router.post("/create", middleware.checkToken, missionController.createMission);
router.get("/:id", middleware.checkToken, missionController.readMission);
router.put("/:id", middleware.checkToken, missionController.updateMission);
router.delete("/:id", middleware.checkToken, missionController.deleteMission);

module.exports = router;
