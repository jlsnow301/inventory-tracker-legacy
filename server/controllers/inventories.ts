import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import { Inventory } from "../models/inventory.ts";
import HttpError from "../models/http-error.ts";

type RContext = RouterContext<
  Record<string | number, string | undefined>,
  Record<string, number>
>;

/**  Get all inventories */
export const getInventories = async (ctx: RContext) => {
  let inventories;
  try {
    inventories = await Inventory.findAll();
  } catch (_err) {
    throw new HttpError("Could not fetch inventories!", 500);
  }

  if (!inventories) {
    throw new HttpError("Could not find inventories!", 404);
  }

  ctx.response.body = { inventories: inventories };
};

/** Add a new inventory */
export const addInventory = async (ctx: RContext) => {
  let data, body, title, desc;
  try {
    data = await ctx.request.body();
    body = await data.value;
    title = body.title;
    desc = body.description;
  } catch (_err) {
    throw new HttpError("Unknown Error!", 500);
  }

  if (!title || !desc) {
    throw new HttpError("Invalid Inputs!", 430);
  }

  let id;
  try {
    id = await Inventory.create({
      title: title,
      description: desc,
    });
  } catch (_err) {
    throw new HttpError("Could not create inventory!", 500);
  }

  ctx.response.body = { insertedInventory: id };
};

/** Update an inventory */
export const updateInventory = async (ctx: RContext) => {
  let id;
  try {
    id = ctx.params.inventoryId;
  } catch (_err) {
    throw new HttpError("Could not fetch inventory!", 500);
  }

  if (!id) {
    throw new HttpError("No inventory input!", 403);
  }

  let data, body, title, desc;
  try {
    data = await ctx.request.body();
    body = await data.value;
    title = body.title;
    desc = body.description;
  } catch (_err) {
    throw new HttpError("Unknown Error!", 500);
  }

  try {
    Inventory.update(id, {
      title: title,
      description: desc,
    });
  } catch (_err) {
    throw new HttpError("Could not update inventory!", 500);
  }

  ctx.response.body = {
    message: "Updated inventory!",
    updatedInventory: {
      title,
      desc,
      id,
    },
  };
};

/** Delete an inventory */
export const deleteInventory = async (ctx: RContext) => {
  let id;
  try {
    id = ctx.params.inventoryId;
  } catch (_err) {
    throw new HttpError("Could not fetch ID!", 500);
  }

  if (!id) {
    throw new HttpError("Could not fetch ID!", 500);
  }

  try {
    await Inventory.delete(id);
  } catch (_err) {
    throw new HttpError("Could not delete inventory!", 500);
  }

  ctx.response.body = { message: "Deleted inventory!" };
};
