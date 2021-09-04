import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { create, decode } from "https://deno.land/x/djwt@v2.3/mod.ts";

import HttpError from "../models/http-error.ts";
import { User } from "../models/user.ts";

/** Logs a user in */
export const login = async (ctx: RouterContext) => {};

/** Creates a new user */
export const signup = async (ctx: RouterContext) => {};
