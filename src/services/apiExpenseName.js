import { assertOnline } from "#lib/utils";
import supabase from "./supabase";

export async function getSmartCategories() {
  assertOnline();
  const {
    data: { generatedName },
    error,
  } = await supabase.functions.invoke("generate-expense-name", {
    body: {
      description:
        "I took an Uber to the shopping mall, bought a birthday gift for my sister, and grabbed a coffee while I was there.",
      category: "Gifts",
    },
  });
  if (error) {
    throw error;
  }
  return generatedName;
}
