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
    error: userError,
  } = await supabase.auth.getUser();
  if (userError) {
    throw userError;
  }
  if (!user) {
    throw new Error("User is not authenticated.");
  }
  let query = supabase
    .from("budgets")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .order("id", { ascending: false });

  if (dateRange) {
    const { start, end } = dateRange;
    query = query.gte("created_at", start).lt("created_at", end);
  }
  const { data: budgets = [], error } = await query.abortSignal(signal);
  if (error) {
    throw error;
  }
  const seenCategories = new Set();
  return budgets.filter((budget) => {
    const category = budget.category;
    if (seenCategories.has(category)) {
      return false;
    }
    seenCategories.add(category);
    return true;
  });
}
