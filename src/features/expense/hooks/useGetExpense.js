import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getExpenseAPI } from "../../../services/apiAuth";

export function useGetExpense(expenseId) {
  const queryClient = useQueryClient();
  const {
    data: expense,
    error,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["expense", expenseId],
    queryFn: () => getExpenseAPI(expenseId),
    enabled: Boolean(expenseId),
    networkMode: "always",
    initialData: () => {
      return queryClient
        .getQueryData(["expenses"])
        ?.find((exp) => exp.id === expenseId);
    },
  });
  if (error) throw error;
  return { expense, isSuccess, isLoading };
}
