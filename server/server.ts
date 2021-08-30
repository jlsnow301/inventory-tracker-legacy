import {
  Application,
  isHttpError,
  Status,
} from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { connect } from "./helpers/db.ts";
import fileRoutes from "./routes/files.ts";
import HttpError from "./models/http-error.ts";
import inventoryRoutes from "./routes/inventories.ts";
import itemRoutes from "./routes/items.ts";
import userRoutes from "./routes/users.ts";

connect();
const app = new Application();

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
app.use(inventoryRoutes.routes());
app.use(inventoryRoutes.allowedMethods());
app.use(itemRoutes.routes());
app.use(itemRoutes.allowedMethods());
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

/** Error handling */
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          ctx.response.status = 404;
          ctx.response.body = "Not found!";
          break;
        default:
          ctx.response.status = err.status || 500;
          ctx.response.body = err.message || "Unknown Error Occured";
      }
    } else {
      // rethrow if you can't handle the error
      throw err;
    }
  }
});

app.addEventListener("error", (evt) => {
  // Will log the thrown error to the console.
  console.log(evt.error);
});

const port = 5000;

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

app.listen({ port });
