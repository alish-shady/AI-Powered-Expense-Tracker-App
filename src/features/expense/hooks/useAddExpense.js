import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExpenseAPI } from "../../../services/apiAuth";

export function useAddExpense() {
  const queryClient = useQueryClient();
  const {
    data,
    error,
    reset,
    isSuccess,
    isPending,
    mutate: addExpense,
  } = useMutation({
    mutationFn: addExpenseAPI,
    onMutate: (data) => {
      queryClient.setQueryData(["expenses"], (e) => [...e, data]);
    },
  });
  return { data, isPending, isSuccess, addExpense, reset };
}
