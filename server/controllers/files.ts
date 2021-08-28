import { RouterContext, send } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import HttpError from "../models/http-error.ts";

type RContext = RouterContext<
  Record<string | number, string | undefined>,
  Record<string, number>
>;

/**  Get image */
export const getFile = async (ctx: RContext) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/uploads`,
    index: "index.html",
  });
};

/**  Post image */
export const addFile = async (ctx: RContext) => {};

/**  Delete image */
export const deleteFile = async (ctx: RContext) => {};
