import { Bson } from "https://deno.land/x/mongo@v0.25.0/mod.ts";

import getDatabase from "../helpers/db.ts";

interface Data {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export class Inventory {
  static async create(data: Data) {
    const id = await getDatabase().collection("inventories").insertOne(data);
    return { id: id.$oid };
  }

  static async findAll() {
    return await getDatabase().collection("inventories").find();
  }

  static async update(id: string, data: Data) {
    await getDatabase()
      .collection("inventories")
      .updateOne({ _id: new Bson.ObjectId(id) }, { $set: data });
  }

  static async delete(id: string) {
    await getDatabase()
      .collection("inventories")
      .deleteOne({ _id: new Bson.ObjectId(id) });
  }
}
