// pages/api/db.js
import { Client } from "pg";

export default async function handler(req, res) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  await client.connect();
  const result = await client.query("SELECT NOW()");
  res.status(200).json({ time: result.rows[0].now });
  await client.end();
}
