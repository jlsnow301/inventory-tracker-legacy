// import { Application, RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";
// import { verify } from "https://deno.land/x/djwt/mod.ts";

// import HttpError from "../models/http-error.ts";
// import { SERVER_TOKEN } from "../config/keys.ts";

// const app = new Application();

// type RContext = RouterContext<
//   Record<string | number, string | undefined>,
//   Record<string, number>
// >;

// export const checkAuth = app.use(async (ctx, next) => {
//   if (ctx.request.method === "OPTIONS") {
//     return await next();
//   }
//   try {
//     const token = ctx.request.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'
//     if (!token) {
//       throw new Error("Authentication failed.");
//     }
//     const decodedToken = verify(token, SERVER_TOKEN);
//     ctx.request.userData = { userId: decodedToken.userId };
//     next();
//   } catch (_err) {
//     const error = new HttpError("Authentication failed.", 403);
//       return next();
//   }
// });
