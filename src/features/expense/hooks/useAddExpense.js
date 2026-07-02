import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addExpenseAPI } from "../../../services/apiAuth";
import { getErrorMessage, normalizeError } from "#lib/utils";
import { showError } from "@/utils/showError";

export function useAddExpense() {
  const queryClient = useQueryClient();
  const {
    data,
    reset,
    isSuccess,
    isPending,
    mutate: addExpense,
  } = useMutation({
    mutationFn: addExpenseAPI,
    networkMode: "always",
    onError: (err) => {
      const error = normalizeError(err);
      const errorMessage = getErrorMessage(error);
      showError(errorMessage);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["expenses"], (e) => [...e, ...data]);
    },
  });
  return { data, isPending, isSuccess, addExpense, reset };
}
