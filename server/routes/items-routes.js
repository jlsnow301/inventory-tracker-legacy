// Module imports
const express = require("express");
const { check } = require("express-validator");

// Local imports
const itemControllers = require("../controllers/items-controllers");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

// Prevent unauthorized access
router.use(checkAuth);

// Route controllers
//GET////////////////////////////////////////////////////////////////////////////////
router.get("/:itemId", itemControllers.getItemById);

router.get("/inventory/:invId", itemControllers.getItemsByInventoryId);

//POST///////////////////////////////////////////////////////////////////////////////
router.post(
  "/:invId",
  fileUpload.single("image"),
  [
    check("name").notEmpty(),
    check("description").isLength({ min: 5 }),
    check("category").notEmpty().isLength({ min: 5 }),
    check("dosage").notEmpty().isNumeric(),
    check("quantity").notEmpty().isNumeric(),
  ],
  itemControllers.createItem
);

//PATCH//////////////////////////////////////////////////////////////////////////////
router.patch(
  "/:itemId",
  [
    check("name").notEmpty(),
    check("description").isLength({ min: 5 }),
    check("category").notEmpty().isLength({ min: 5 }),
    check("dosage").notEmpty().isNumeric(),
    check("quantity").notEmpty().isNumeric(),
  ],
  itemControllers.updateItem
);

//DELETE/////////////////////////////////////////////////////////////////////////////
router.delete("/:itemId", itemControllers.deleteItem);

module.exports = router;
