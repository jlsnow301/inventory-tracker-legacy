import { Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users.ts";

const router = new Router();

router.get("/user", getUsers);

router.post("/user", addUser);

router.patch("/user/:userId", updateUser);

router.delete("/user/:userId", deleteUser);

export default router;
