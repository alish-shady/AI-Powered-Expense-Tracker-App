import { getBudgetsAPI } from "@/services/apiBudgets";
import { useQuery } from "@tanstack/react-query";

export function useGetBudgets(dateRange) {
  const {
    data: budgets = [],
    error,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["budgets", dateRange],
    queryFn: ({ signal }) => getBudgetsAPI({ dateRange, signal }),
    networkMode: "always",
    // enabled: Boolean(dateRange?.start && dateRange?.end),
  });
  console.log({ budgets, isError });
  if (error) throw error;
  return { budgets, error, isError, isSuccess, isLoading };
}
