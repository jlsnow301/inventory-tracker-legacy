import {
  MongoClient,
  Database,
} from "https://deno.land/x/mongo@v0.25.0/mod.ts";
import { MONGO_URI } from "../config/keys.ts";

let database: Database;

export async function connect() {
  const client = new MongoClient();

  await client.connect(MONGO_URI);

  const _database = client.database("inventory_manager");
}

function getDb() {
  return database;
}

export default getDb;
