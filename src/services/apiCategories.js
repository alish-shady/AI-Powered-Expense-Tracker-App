import { assertOnline } from "#lib/utils";
import supabase from "./supabase";

export async function getSmartCategories(description) {
  assertOnline();
  const {
    data: { classifications },
    error,
  } = await supabase.functions.invoke("get-category-suggestion", {
    body: { description },
  });
  if (error) {
    throw error;
  }
  return classifications;
}
