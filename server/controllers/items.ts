import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";

import HttpError from "../models/http-error.ts";
import { Item } from "../models/item.ts";

/** Gets all items */
export const getItems = async (ctx: RouterContext) => {
  let items: unknown[];
  try {
    items = await Item.findAll();
  } catch (_err) {
    throw new HttpError("Could not fetch items!", 500);
  }

  if (!items.length) {
    throw new HttpError("No items found!", 404);
  }

  ctx.response.body = { items: items };
};

/** Get a specific item based on id */
export const getItemById = async (ctx: RouterContext) => {
  let id, item;
  try {
    id = ctx.params.itemId;
  } catch (_err) {
    throw new HttpError("Could not fetch item!", 500);
  }

  if (!id) {
    throw new HttpError("No item input!", 403);
  }

  try {
    item = await Item.findOne(id);
  } catch (err) {
    console.log(err);
    throw new HttpError("Could not fetch item!", 500);
  }

  if (!item) {
    throw new HttpError("Item not found!", 404);
  }

  ctx.response.body = { item: item };
};

/** Add an item */
export const addItem = async (ctx: RouterContext) => {
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
    id = await Item.create({
      title: title,
      description: desc,
    });
  } catch (_err) {
    throw new HttpError("Could not create item!", 500);
  }

  ctx.response.body = { insertedItem: id };
};

/** Update an existing item */
export async function updateItem(ctx: RouterContext) {
  let id;
  try {
    id = ctx.params.itemId;
  } catch (_err) {
    throw new HttpError("Could not fetch item!", 500);
  }

  if (!id) {
    throw new HttpError("No item input!", 403);
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
    Item.update(id, {
      title: title,
      description: desc,
    });
  } catch (_err) {
    throw new HttpError("Could not update item!", 500);
  }

  ctx.response.body = {
    message: "Updated item!",
    updatedItem: {
      title,
      desc,
      id,
    },
  };
}

/** Delete an item */
export const deleteItem = async (ctx: RouterContext) => {
  let id;
  try {
    id = ctx.params.itemId;
  } catch (_err) {
    throw new HttpError("Could not fetch ID!", 500);
  }

  if (!id) {
    throw new HttpError("Could not fetch ID!", 500);
  }

  try {
    await Item.delete(id);
  } catch (_err) {
    throw new HttpError("Could not delete item!", 500);
  }

  ctx.response.body = { message: "Deleted item!" };
};
