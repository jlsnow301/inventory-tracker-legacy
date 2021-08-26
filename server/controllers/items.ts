import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { Item } from "../models/item.ts";

type RContext = RouterContext<
  Record<string | number, string | undefined>,
  Record<string, number>
>;

export async function getItems(ctx: RContext) {
  const items = await Item.findAll();
  if (items) {
    ctx.response.body = { items: items };
  } else {
    ctx.response.body = { message: "Nothing Found!" };
  }
}

export async function addItem(ctx: RContext) {
  const data = await ctx.request.body();
  const body = await data.value;
  const title = body?.title;
  const desc = body?.description;
  const imageUrl = body?.imageUrl;
  const itemUrl = body?.url;
  const id = await Item.create({
    title: title,
    description: desc,
    imageUrl: imageUrl,
    url: itemUrl,
  });
  ctx.response.body = { insertedItem: id };
}

export async function updateItem(ctx: RContext) {
  const data = await ctx.request.body();
  const body = await data.value;
  const title = body?.title;
  const desc = body?.description;
  const imageUrl = body?.imageUrl;
  const itemUrl = body?.url;
  const id = ctx.params.itemId!;

  Item.update(id, {
    title: title,
    description: desc,
    imageUrl: imageUrl,
    url: itemUrl,
  });
  ctx.response.body = {
    message: "Updated item!",
    updatedItem: {
      title: title,
      description: desc,
      imageUrl: imageUrl,
      url: itemUrl,
      id: id,
    },
  };
}

export async function deleteItem(ctx: RContext) {
  const id = ctx.params.itemId!;
  await Item.delete(id);
  ctx.response.body = { message: "Deleted item!" };
}
