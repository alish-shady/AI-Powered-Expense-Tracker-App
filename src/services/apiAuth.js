import { assertOnline, normalizeError } from "#lib/utils";
import supabase from "./supabase";

export async function loginAPI({ email, password }) {
  assertOnline();
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw normalizeError(error);
  return data;
}

export async function signupAPI({ email, password, fullName }) {
  assertOnline();
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
      },
    },
  });
  if (error) throw normalizeError(error);

  return data;
}

export async function signoutAPI() {
  assertOnline();
  const { error } = await supabase.auth.signOut({ scope: "local" });
  if (error) throw normalizeError(error);
}
