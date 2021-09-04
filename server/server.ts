import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import authRoutes from "./routes/auth.ts";
import { connect } from "./helpers/db.ts";
import errorHandler from "./controllers/error-handler.ts";
import fileRoutes from "./routes/files.ts";
import inventoryRoutes from "./routes/inventories.ts";
import itemRoutes from "./routes/items.ts";
import userRoutes from "./routes/users.ts";
import _404 from "./controllers/404.ts";

try {
  connect();
} catch (err) {
  console.log(err);
  throw new Error("Could not connect to db!");
}

const app = new Application();

/** Error handling */
app.use(errorHandler);

/** File handling */
app.use(fileRoutes.routes());
app.use(fileRoutes.allowedMethods());

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
app.use(authRoutes.routes());
app.use(authRoutes.allowedMethods());
app.use(inventoryRoutes.routes());
app.use(inventoryRoutes.allowedMethods());
app.use(itemRoutes.routes());
app.use(itemRoutes.allowedMethods());
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

/** 404 */
app.use(_404);

/** Listeners */
app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  console.log(evt.error);
});

const port = 5000;

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

app.listen({ port });
