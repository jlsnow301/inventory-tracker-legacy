// Module imports
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  items: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "Item",
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
