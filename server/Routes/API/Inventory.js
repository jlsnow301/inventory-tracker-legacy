/**
 * server/routes/inventories/invetory.js
 *
 * @routes /api/inventory
 *
 * @todos
 *  Add Following Routes
 *  - Update Inventory
 *  - Delete Inventory
 *
 * @issues
 *
 */

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const INVENTORIES = require('../../Models/Inventories');

/**
 * @purpose gets all inventories that the user has created/has access too
 * @working yes
 *
 * @todos
 *  - add functionality to pull inventories by ownerID
 *
 */
ROUTER.get('/', (req, res) => {
  INVENTORIES.find()
    .sort()
    .then((inventories) => res.json(inventories));
});

/**
 * @purpose Adds an inventory
 * @working yes
 */

ROUTER.post('/', (req, res) => {
  const newInventory = new INVENTORIES({
    name: req.body.name,
    description: req.body.description,
    owner: req.body.owner,
    history: req.body.history,
    items: req.body.items,
    access: req.body.access,
    inventoryCount: req.body.inventoryCount,
    date: req.body.date,
  });
  newInventory.save().then((inventory) => res.json(inventory));
});

// Enter no text below this point

module.exports = ROUTER;
