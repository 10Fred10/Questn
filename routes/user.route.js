const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const middleware = require('../controllers/middleware');

/********************* CRUD *********************/
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id",middleware.checkToken, userController.readUser);
router.put("/:id",middleware.checkToken, userController.updateUser);
router.put("/newPassword/:id/",middleware.checkToken, userController.updateUserPass);
router.put("/newEmail/:id/",middleware.checkToken, userController.updateUserEmail);
router.delete("/:id",middleware.checkToken, userController.deleteUser);

module.exports = router;
