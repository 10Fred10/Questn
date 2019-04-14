const express = require ('express');
const router = express.Router();
const rewardController = require ('../controllers/reward.controller');

/********************* CRUD *********************/
router.post('/create', rewardController.createReward);
router.get('/:id', rewardController.readReward);
router.put('/:id', rewardController.updateReward);
router.delete('/:id', rewardController.deleteReward);

module.exports = router;