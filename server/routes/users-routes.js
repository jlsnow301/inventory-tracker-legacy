// Module imports
const express = require("express");
const { check } = require("express-validator");

// Local imports
const usersController = require("../controllers/users-controllers");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

//POST//////////////////////////////////////////////////////////////////////////////
router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").notEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

router.post("/login", usersController.login);

//GET///////////////////////////////////////////////////////////////////////////////
router.use(checkAuth);
router.get("/", usersController.getUser);

module.exports = router;
