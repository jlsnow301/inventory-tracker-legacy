import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { Inventory } from "../models/inventory.ts";

type RContext = RouterContext<
  Record<string | number, string | undefined>,
  Record<string, number>
>;

export async function getInventories(ctx: RContext) {
  const inventories = await Inventory.findAll();
  if (inventories) {
    ctx.response.body = { inventories: inventories };
  } else {
    ctx.response.body = { message: "Nothing Found!" };
  }
}

export async function addInventory(ctx: RContext) {
  const data = await ctx.request.body();
  const body = await data.value;
  const title = body?.title;
  const desc = body?.description;
  const imageUrl = body?.imageUrl;
  const inventoryUrl = body?.url;
  const id = await Inventory.create({
    title: title,
    description: desc,
    imageUrl: imageUrl,
    url: inventoryUrl,
  });
  ctx.response.body = { insertedInventory: id };
}

export async function updateInventory(ctx: RContext) {
  const data = await ctx.request.body();
  const body = await data.value;
  const title = body?.title;
  const desc = body?.description;
  const imageUrl = body?.imageUrl;
  const inventoryUrl = body?.url;
  const id = ctx.params.inventoryId!;

  Inventory.update(id, {
    title: title,
    description: desc,
    imageUrl: imageUrl,
    url: inventoryUrl,
  });
  ctx.response.body = {
    message: "Updated inventory!",
    updatedInventory: {
      title: title,
      description: desc,
      imageUrl: imageUrl,
      url: inventoryUrl,
      id: id,
    },
  };
}

export async function deleteInventory(ctx: RContext) {
  const id = ctx.params.inventoryId!;
  await Inventory.delete(id);
  ctx.response.body = { message: "Deleted inventory!" };
}
