import { assertOnline } from "#lib/utils";
import supabase from "./supabase";

export async function getSmartCategories() {
  assertOnline();
  const {
    data: { classifications },
    error,
  } = await supabase.functions.invoke("get-category-suggestion", {
    body: { description: "getting pizza." },
  });
  if (error) {
    throw error;
  }
  return classifications;
}
