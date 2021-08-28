import { Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { getFile, addFile, deleteFile } from "../controllers/files.ts";

const router = new Router();

router.get("/uploads/images/:imageId", getFile);

router.post("/uploads/images", addFile);

router.delete("/uploads/images/:imageId", deleteFile);

export default router;
