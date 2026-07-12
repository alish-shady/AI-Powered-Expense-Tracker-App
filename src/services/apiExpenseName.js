import { assertOnline } from "#lib/utils";
import supabase from "./supabase";

export async function getExpenseName({ description, category }) {
  assertOnline();
  const { data: expenseName, error } = await supabase.functions.invoke(
    "generate-expense-name",
    {
      body: {
        description,
        category,
      },
    },
  );
  if (error) {
    throw error;
  }
  return expenseName;
}
