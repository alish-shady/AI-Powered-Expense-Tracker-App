import { normalizeError } from "#lib/utils";
import supabase from "./supabase";

export async function loginAPI({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw normalizeError(error);
  return data;
}

export async function signupAPI({ email, password, fullName }) {
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
  const { error } = await supabase.auth.signOut({ scope: "local" });
  if (error) throw normalizeError(error);
}

export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) throw normalizeError(error);
  return user;
}

export async function addExpenseAPI({ amount, category, description }) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("expenses")
    .insert([{ amount, category, description, user_id: user.id }])
    .select();
  if (error) throw normalizeError(error);

  return data;
}

export async function getExpensesAPI() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: expenses, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.log({ errorInMethod: error });
    throw error;
  }

  return expenses;
}

export async function getExpenseAPI(expenseId) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: expense, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", user.id)
    .eq("id", expenseId);
  if (error) throw normalizeError(error);

  return expense.at(0);
}

export async function deleteExpenseAPI(expenseId) {
  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", expenseId);

  if (error) throw normalizeError(error);

  return true;
}

export async function updateExpenseAPI(expenseId, changedValues) {
  const { data, error } = await supabase
    .from("expenses")
    .update(changedValues)
    .eq("id", expenseId)
    .select();

  if (error) throw normalizeError(error);

  return data;
}
