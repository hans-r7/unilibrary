"use server";

import { signOut } from "@/auth";

export async function HeaderSignOut() {
  return await signOut();
}
