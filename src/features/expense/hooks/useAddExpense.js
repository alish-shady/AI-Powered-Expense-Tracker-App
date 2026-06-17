import { useMutation } from "@tanstack/react-query";
import { addExpenseAPI } from "../../../services/apiAuth";

export function useAddExpense() {
  const {
    data,
    error,
    reset,
    isSuccess,
    isPending,
    mutate: addExpense,
  } = useMutation({
    mutationFn: addExpenseAPI,
  });
  return { data, isPending, isSuccess, addExpense, reset };
}
