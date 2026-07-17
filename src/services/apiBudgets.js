import { assertOnline } from "#lib/utils";
import supabase from "./supabase";

export async function addBudgetAPI({ category, amount }) {
  assertOnline();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("budgets")
    .insert([{ category, amount, user_id: user.id }])
    .select();
  if (error) throw error;
  return data;
}
export async function getBudgetsAPI({ dateRange, signal }) {
  assertOnline();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let query = supabase
    .from("budgets")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: true })
    .abortSignal(signal);
  if (dateRange) {
    const { start, end } = dateRange;
    query = query.gte("created_at", start).lt("created_at", end);
  }
  const { data: budgets, error } = await query;
  if (error) {
    throw error;
  }
  return budgets;
}
