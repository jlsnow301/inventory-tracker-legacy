import { Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";

/** Throws a 404 - not found error */
export default (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { message: "Not found!" };
};
