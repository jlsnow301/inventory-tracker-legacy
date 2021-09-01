import { RouterContext, send } from "https://deno.land/x/oak@v9.0.0/mod.ts";

/**  Get image */
export const getFile = async (ctx: RouterContext) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/uploads`,
    index: "index.html",
  });
};

/**  Post image */
export const addFile = async (ctx: RouterContext) => {};

/**  Delete image */
export const deleteFile = async (ctx: RouterContext) => {};
