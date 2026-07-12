import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getErrorMessage, normalizeError } from "#lib/utils";
import { showError } from "@/utils/showError";
import { addExpenseAPI } from "@/services/apiExpenses";
import { useNavigate } from "react-router";

export function useAddExpense() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
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
      console.log(err);
      const error = normalizeError(err);
      const errorMessage = getErrorMessage(error);
      showError(errorMessage);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["expenses"], (e) => [...e, ...data]);
      navigate("/app/home");
    },
  });
  return { data, isPending, isSuccess, addExpense, reset };
}
