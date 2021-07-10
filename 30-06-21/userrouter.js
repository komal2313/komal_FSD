const express = require("express");
const router = express();
const userController = require("../controller/UserController");
const tokenMiddleware = require("../middleware/isTokenValid")

router.post("/signup", userController.signUp);

router.post("/login", userController.login);

router.get("/user/:id", userController.getUserById);

router.put("/update/:id", tokenMiddleware.isTokenValid, userController.updateUser);

router.get("/token", tokenMiddleware.isTokenValid, userController.isValid);

module.exports = router;

// UPDATE user SET firstName = "komal abc" WHERE email LIKE komalhappy0114@@email.com
