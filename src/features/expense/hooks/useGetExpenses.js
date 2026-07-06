import { getExpensesAPI } from "@/services/apiExpenses";
import { useQuery } from "@tanstack/react-query";

export function useGetExpenses() {
  const {
    data: expenses = [],
    error,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["expenses"],
    networkMode: "always",
    queryFn: getExpensesAPI,
  });
  if (error) throw error;
  return { expenses, error, isError, isSuccess, isLoading };
}
