"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { findUserByEmail, verifyPassword } from "./users";
import { createSessionCookie, clearSessionCookie } from "./session";

const LoginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(1),
});

export type LoginState = {
  error?: string;
  email?: string;
};

export async function loginAction(
  _prev: LoginState | undefined,
  formData: FormData
): Promise<LoginState> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      error: "Please enter a valid email and password.",
      email: String(formData.get("email") ?? ""),
    };
  }

  const { email, password } = parsed.data;
  const user = await findUserByEmail(email);
  if (!user) {
    return { error: "Invalid email or password.", email };
  }

  const ok = await verifyPassword(password, user.password_hash);
  if (!ok) {
    return { error: "Invalid email or password.", email };
  }

  await createSessionCookie({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  redirect("/admin");
}

export async function logoutAction() {
  await clearSessionCookie();
  redirect("/login");
}
