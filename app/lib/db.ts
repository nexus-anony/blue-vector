import "server-only";
import { neon } from "@neondatabase/serverless";

const connectionString = process.env.NEON_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("NEON_CONNECTION_STRING is not set");
}

export const sql = neon(connectionString);
