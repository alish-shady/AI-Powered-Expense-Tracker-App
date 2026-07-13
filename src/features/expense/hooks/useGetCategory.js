import { getSmartCategories } from "@/services/apiCategories";
import { useQuery } from "@tanstack/react-query";

const fallbackCategories = [
  "Transport",
  "Shopping",
  "Entertainment",
  "Health",
  "Other",
  "Housing",
  "Utilities",
  "Groceries",
  "Dining Out",
  "Education",
  "Travel",
  "Insurance",
  "Subscriptions",
  "Personal Care",
  "Clothing",
  "Pets",
  "Gifts",
  "Debt Payments",
  "Savings",
  "Taxes",
];

export function useGetCategory(description) {
  const {
    data: categories = [],
    error,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    networkMode: "always",
    queryFn: () => getSmartCategories(description),
    enabled: false,
  });

  const labels = categories?.map((cat) => cat.label);
  return {
    getCategories: refetch,
    categories: error ? fallbackCategories : labels,
    isFetching,
  };
}
