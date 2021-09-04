import { Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { login, signup } from "../controllers/auth.ts";

const router = new Router();

router.post("/auth/login", login);

router.post("/auth/signup", signup);

export default router;
