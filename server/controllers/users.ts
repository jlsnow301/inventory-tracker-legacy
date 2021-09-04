import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import HttpError from "../models/http-error.ts";
import { User } from "../models/user.ts";

/** TODO: JWT encrypt all data.  */

/** Gets all users */
export const getUsers = async (ctx: RouterContext) => {
  let users: unknown[];
  try {
    users = await User.findAll();
  } catch (_err) {
    throw new HttpError("Could not fetch users!", 500);
  }

  if (!users.length) {
    throw new HttpError("No users found!", 404);
  }

  ctx.response.body = { users: users };
};

/** Get a specific user based on id */
export const getUserById = async (ctx: RouterContext) => {
  let id, user;
  try {
    id = ctx.params.userId;
  } catch (_err) {
    throw new HttpError("Could not fetch user!", 500);
  }

  if (!id) {
    throw new HttpError("No user input!", 403);
  }

  try {
    user = await User.findOne(id);
  } catch (err) {
    console.log(err);
    throw new HttpError("Could not fetch user!", 500);
  }

  if (!user) {
    throw new HttpError("User not found!", 404);
  }

  ctx.response.body = { user: user };
};

/** Update an existing user */
export async function updateUser(ctx: RouterContext) {
  let id;
  try {
    id = ctx.params.userId;
  } catch (_err) {
    throw new HttpError("Could not fetch user!", 500);
  }

  if (!id) {
    throw new HttpError("No user input!", 403);
  }

  let data, body, email, image, name, password;
  try {
    data = await ctx.request.body();
    body = await data.value;
    email = body.email;
    image = body.image;
    name = body.name;
    password = body.password;
  } catch (_err) {
    throw new HttpError("Unknown Error!", 500);
  }

  try {
    User.update(id, {
      email,
      image,
      name,
      password,
    });
  } catch (_err) {
    throw new HttpError("Could not update user!", 500);
  }

  ctx.response.body = {
    message: "Updated user!",
    updatedUser: {
      email,
      image,
      name,
      password,
    },
  };
}

/** Delete an existing user */
export const deleteUser = async (ctx: RouterContext) => {
  let id;
  try {
    id = ctx.params.userId;
  } catch (_err) {
    throw new HttpError("Could not fetch ID!", 500);
  }

  if (!id) {
    throw new HttpError("Could not fetch ID!", 500);
  }

  try {
    await User.delete(id);
  } catch (_err) {
    throw new HttpError("Could not delete user!", 500);
  }

  ctx.response.body = { message: "Deleted user!" };
};
