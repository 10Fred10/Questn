const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/user.controller');

//test URL 
router.get('/test', userController.test);
//router.post('/create', userController.createUser)

module.exports = router;