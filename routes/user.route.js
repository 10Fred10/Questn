const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

/********************* CRUD *********************/
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/:id", userController.readUser);
router.put("/:id", userController.updateUser);
router.put("/newPassword/:id/", userController.updateUserPass);
router.put("/newEmail/:id/", userController.updateUserEmail);
router.delete("/:id", userController.deleteUser);

module.exports = router;
