import { assertOnline, normalizeError } from "#lib/utils";
import supabase from "./supabase";

export async function addExpenseAPI({ amount, category, description }) {
  assertOnline();
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
  assertOnline();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: expenses, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at");

  if (error) {
    throw error;
  }

  return expenses;
}

export async function getExpenseAPI(expenseId) {
  assertOnline();
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
  assertOnline();
  console.log({ expenseId });
  const { error } = await supabase
    .from("expenses")
    .delete()
    .eq("id", expenseId);

  if (error) throw normalizeError(error);

  return true;
}

export async function updateExpenseAPI(expenseId, changedValues) {
  assertOnline();
  const { data, error } = await supabase
    .from("expenses")
    .update(changedValues)
    .eq("id", expenseId)
    .select();

  if (error) throw normalizeError(error);

  return data;
}
