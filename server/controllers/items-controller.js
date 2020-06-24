const { v4: uuidv4 } = require("uuid");
const { validationResult } = require("express-validator");

const items = require("../models/items");
const HttpError = require("../models/http-error");
const { db } = require("../models/items");

// Get all items in an inventory
const getItemsByGroup = (req, res, next) => {
  const inventoryId = req.params.invId;

  // This is where it's a bit confusing. Need to get all items in subdocument.
  // Is this inventories.[inventoryId].find(); ?
  const results = items.find();

  if (!results) {
    throw new HttpError("Could not find any items in this group.", 404);
  }

  res.json({ results });
};

// Query by ID
const getItemById = (req, res, next) => {
  const itemId = req.params.itemId;

  const results = items.find((q) => {
    return q.id === itemId;
  });

  if (!results) {
    throw new HttpError("Could not find an item with this Id.", 404);
  }

  res.json({ item });
};

// Create an item
const createItem = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid Input! Check your data.", 422));
  }

  // Describe body contents
  const {
    name,
    description,
    category,
    dosage,
    quantity,
    preparation,
    brand,
  } = req.body;

  // Create the item
  const createdItem = {
    name,
    description,
    category,
    dosage,
    quantity,
    preparation,
    brand,
  };

  items.update(
    { _id: uuidv4() },
    { $push: { items: createdItem } },
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(res);
    }
  );
};
