import { Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import {
  getItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} from "../controllers/items.ts";

const router = new Router();

router.get("/item", getItems);

router.get("/item/:itemId", getItemById);

router.post("/item", addItem);

router.patch("/item/:itemId", updateItem);

router.delete("/item/:itemId", deleteItem);

export default router;
