import { Context, Status } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { isHttpError } from "../models/http-error.ts";

/** Error handling */
export default async (ctx: Context, next: Function) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          ctx.response.status = err.status || 404;
          ctx.response.body = err.message || "Not found!";
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
};
