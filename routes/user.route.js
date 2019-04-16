const express = require ('express');
const router = express.Router();
const userController = require ('../controllers/user.controller');

/********************* CRUD *********************/
router.post('/create', userController.createUser);
router.get('/:id', userController.readUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.put('/newPassword/:id/', userController.updateUserPass);
router.put('/newEmail/:id/', userController.updateUserEmail);

module.exports = router;