import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { connect } from "./helpers/db.ts";
import inventoryRoutes from "./routes/inventories.ts";
import itemRoutes from "./routes/items.ts";
import userRoutes from "./routes/users.ts";

connect();
const app = new Application();

/** Affix headers */
app.use(async (ctx, next) => {
  ctx.response.headers.set("Access-Control-Allow-Origin", "*");
  ctx.response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE"
  );
  ctx.response.headers.set("Access-Control-Allow-Headers", "Content_Type");
  await next();
});

/** Routes */
app.use(inventoryRoutes.routes());
app.use(inventoryRoutes.allowedMethods());
app.use(itemRoutes.routes());
app.use(itemRoutes.allowedMethods());
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

app.listen({ port: 5000 });
console.log("Now running");
