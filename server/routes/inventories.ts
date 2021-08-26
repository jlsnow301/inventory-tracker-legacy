import { Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import {
  getInventories,
  addInventory,
  updateInventory,
  deleteInventory,
} from "../controllers/inventories.ts";

const router = new Router();

router.get("/inventory", getInventories);

router.post("/inventory", addInventory);

router.patch("/inventory/:inventoryId", updateInventory);

router.delete("/inventory/:inventoryId", deleteInventory);

export default router;
