const express = require ('express');
const router = express.Router();
const missionController = require ('../controllers/mission.controller');

/********************* CRUD *********************/
router.post('/create', missionController.createMission);
router.get('/:id', missionController.readMission);
router.put('/:id', missionController.updateMission);
router.delete('/:id', missionController.deleteMission);

module.exports = router;