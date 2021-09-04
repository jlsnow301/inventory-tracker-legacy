import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { verify } from "https://deno.land/x/djwt@v2.3/mod.ts";

import HttpError from "../models/http-error.ts";
import { SERVER_TOKEN } from "../config/keys.ts";

const app = new Application();

export const checkAuth = app.use(async (ctx, next) => {
  if (ctx.request.method === "OPTIONS") {
    return await next();
  }
  try {
    const auth = ctx.request.headers.get("authorization");
    if (!auth) {
      throw new HttpError("Authentication failed", 401);
    }

    const token = auth.split(" ")[1]; // Authorization: 'Bearer TOKEN'
    if (!token) {
      throw new Error("Authentication failed.");
    }

    if (await verify(token, SERVER_TOKEN)) {
      next();
      return;
    }
    throw new HttpError("Invalid JWT Token", 401);
  } catch (_err) {
    throw new HttpError("Authentication failed.", 403);
  }
});
