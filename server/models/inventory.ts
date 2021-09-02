import { Bson } from "https://deno.land/x/mongo@v0.25.0/mod.ts";

import { getDatabase } from "../helpers/db.ts";

interface Data {
  title: string;
  description: string;
}

export class Inventory {
  static async create(data: Data) {
    const id: Bson.Document = await getDatabase()
      .collection("inventories")
      .insertOne(data);
    return { id: id.$oid };
  }

  static async findAll() {
    return await getDatabase()
      .collection("inventories")
      .find({}, { noCursorTimeout: false })
      .toArray();
  }

  static async findOne(id: string) {
    return await getDatabase()
      .collection("inventories")
      .findOne({ _id: new Bson.ObjectId(id) }, { noCursorTimeout: false });
  }

  static async update(id: string, data: Data) {
    return await getDatabase()
      .collection("inventories")
      .updateOne({ _id: new Bson.ObjectId(id) }, { $set: data });
  }

  static async delete(id: string) {
    return await getDatabase()
      .collection("inventories")
      .deleteOne({ _id: new Bson.ObjectId(id) });
  }
}
