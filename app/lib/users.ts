import "server-only";
import bcrypt from "bcryptjs";
import { sql } from "./db";

export type UserRecord = {
  id: number;
  email: string;
  name: string;
  role: string;
  password_hash: string;
};

export async function findUserByEmail(
  email: string
): Promise<UserRecord | null> {
  const rows = await sql`
    SELECT id, email, name, role, password_hash
    FROM users WHERE email = ${email.toLowerCase()}
    LIMIT 1
  `;
  const r = rows[0] as Record<string, unknown> | undefined;
  if (!r) return null;
  return {
    id: r.id as number,
    email: r.email as string,
    name: r.name as string,
    role: r.role as string,
    password_hash: r.password_hash as string,
  };
}

export async function verifyPassword(
  plain: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(plain, hash);
}
