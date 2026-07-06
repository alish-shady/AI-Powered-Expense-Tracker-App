import { assertOnline, normalizeError } from "#lib/utils";
import supabase from "./supabase";

export async function getCurrentUserAPI() {
  assertOnline();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw normalizeError(error);
  return user;
}
