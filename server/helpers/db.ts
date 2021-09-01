import {
  MongoClient,
  Database,
} from "https://deno.land/x/mongo@v0.25.0/mod.ts";
import { MONGO_URI } from "../config/keys.ts";

let database: Database;

export const connect = async () => {
  const client = new MongoClient();

  await client.connect(MONGO_URI);

  database = client.database("inventory_manager");
};

export const getDatabase = () => {
  return database;
};
