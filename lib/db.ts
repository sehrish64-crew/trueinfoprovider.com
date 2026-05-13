import mysql from "mysql2/promise";
import { randomUUID } from "crypto";

const databaseUrl = process.env.DATABASE_URL;

let host = process.env.MYSQL_HOST || "localhost";
let port = Number(process.env.MYSQL_PORT || 3306);
let user = process.env.MYSQL_USER || "root";
let password = process.env.MYSQL_PASSWORD || "";
let database = process.env.MYSQL_DATABASE || "true_info_provider";

if (databaseUrl) {
  try {
    const parsed = new URL(databaseUrl);
    const scheme = parsed.protocol.replace(":", "");

    if (scheme !== "mysql" && scheme !== "mariadb") {
      throw new Error("DATABASE_URL must use mysql:// or mariadb:// protocol");
    }

    host = parsed.hostname;
    port = Number(parsed.port || 3306);
    user = decodeURIComponent(parsed.username);
    password = decodeURIComponent(parsed.password || "");
    database = parsed.pathname.replace(/^\//, "");
  } catch (error) {
    throw new Error(
      `Invalid DATABASE_URL: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

const pool = mysql.createPool({
  host,
  port,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query(sql: string, params: unknown[] = []) {
  const [rows] = await pool.execute(sql, params as any);
  return rows as any[];
}

export async function queryOne(sql: string, params: unknown[] = []) {
  const rows = await query(sql, params);
  return (rows as any[])[0] ?? null;
}

export function createId() {
  return randomUUID();
}

export { pool };
