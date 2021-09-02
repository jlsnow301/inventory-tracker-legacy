import { Bson } from "https://deno.land/x/mongo@v0.25.0/mod.ts";

import { getDatabase } from "../helpers/db.ts";

interface Data {
  email: string;
  image: string;
  name: string;
  password: string;
}

export class User {
  static async create(data: Data) {
    const id = await getDatabase().collection("users").insertOne(data);
    return { id: id.$oid };
  }

  static async findAll() {
    return await getDatabase()
      .collection("users")
      .find({}, { noCursorTimeout: false })
      .toArray();
  }

  static async findOne(id: string) {
    return await getDatabase()
      .collection("inventories")
      .findOne({ _id: new Bson.ObjectId(id) }, { noCursorTimeout: false });
  }

  static async update(id: string, data: Data) {
    await getDatabase()
      .collection("users")
      .updateOne({ _id: new Bson.ObjectId(id) }, { $set: data });
  }

  static async delete(id: string) {
    await getDatabase()
      .collection("users")
      .deleteOne({ _id: new Bson.ObjectId(id) });
  }
}
