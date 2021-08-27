import { Bson } from "https://deno.land/x/mongo@v0.25.0/mod.ts";

import getDatabase from "../helpers/db.ts";
import HttpError from "./http-error.ts";

interface Data {
  title: string;
  description: string;
}

export class Inventory {
  static async create(data: Data) {
    let id: Bson.Document;
    try {
      id = await getDatabase().collection("inventories").insertOne(data);
    } catch (_err) {
      throw new HttpError("Failed to create inventory!", 500);
    }

    if (!id) {
      throw new HttpError("Could not create inventory!", 500);
    }

    return { id: id.$oid };
  }

  static async findAll() {
    try {
      return await getDatabase().collection("inventories").find();
    } catch (_err) {
      throw new HttpError("Failed to find inventories!", 500);
    }
  }

  static async update(id: string, data: Data) {
    try {
      await getDatabase()
        .collection("inventories")
        .updateOne({ _id: new Bson.ObjectId(id) }, { $set: data });
    } catch (_err) {
      throw new HttpError("Could not update!", 500);
    }
  }

  static async delete(id: string) {
    try {
      await getDatabase()
        .collection("inventories")
        .deleteOne({ _id: new Bson.ObjectId(id) });
    } catch (_err) {
      throw new HttpError("Could not delete inventory!", 500);
    }
  }
}
