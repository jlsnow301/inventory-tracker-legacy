// Module imports
const express = require("express");
const { check } = require("express-validator");

// Local imports
const inventoryControllers = require("../controllers/inventory-controllers");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

// Prevent unauthorized access
router.use(checkAuth);

// Route controllers
//GET////////////////////////////////////////////////////////////////////////////////
router.get("/:invId", inventoryControllers.getInventoryById);

router.get("/user/:userId", inventoryControllers.getInventoriesByUserId);

//POST///////////////////////////////////////////////////////////////////////////////
router.post(
  "/",
  [check("name").notEmpty(), check("description").isLength({ min: 5 })],
  inventoryControllers.createInventory
);

//PATCH//////////////////////////////////////////////////////////////////////////////
router.patch(
  "/:invId",
  [check("name").notEmpty(), check("description").isLength({ min: 5 })],
  inventoryControllers.updateInventory
);

//DELETE/////////////////////////////////////////////////////////////////////////////
router.delete("/:invId", inventoryControllers.deleteInventory);

module.exports = router;
