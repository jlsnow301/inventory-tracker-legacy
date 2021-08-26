import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { User } from "../models/user.ts";

type RContext = RouterContext<
  Record<string | number, string | undefined>,
  Record<string, number>
>;

export async function getUsers(ctx: RContext) {
  const users = await User.findAll();
  if (users) {
    ctx.response.body = { users: users };
  } else {
    ctx.response.body = { message: "Nothing Found!" };
  }
}

export async function addUser(ctx: RContext) {
  const data = await ctx.request.body();
  const body = await data.value;
  const title = body?.title;
  const desc = body?.description;
  const imageUrl = body?.imageUrl;
  const userUrl = body?.url;
  const id = await User.create({
    title: title,
    description: desc,
    imageUrl: imageUrl,
    url: userUrl,
  });
  ctx.response.body = { insertedUser: id };
}

export async function updateUser(ctx: RContext) {
  const data = await ctx.request.body();
  const body = await data.value;
  const title = body?.title;
  const desc = body?.description;
  const imageUrl = body?.imageUrl;
  const userUrl = body?.url;
  const id = ctx.params.userId!;

  User.update(id, {
    title: title,
    description: desc,
    imageUrl: imageUrl,
    url: userUrl,
  });
  ctx.response.body = {
    message: "Updated user!",
    updatedUser: {
      title: title,
      description: desc,
      imageUrl: imageUrl,
      url: userUrl,
      id: id,
    },
  };
}

export async function deleteUser(ctx: RContext) {
  const id = ctx.params.userId!;
  await User.delete(id);
  ctx.response.body = { message: "Deleted user!" };
}
