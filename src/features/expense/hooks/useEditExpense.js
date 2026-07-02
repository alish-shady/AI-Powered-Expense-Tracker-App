import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExpenseAPI } from "../../../services/apiAuth";
import { useParams } from "react-router";
import { getErrorMessage, normalizeError } from "#lib/utils";
import { showError } from "@/utils/showError";

export function useEditExpense() {
  const queryClient = useQueryClient();
  const { expenseId } = useParams();
  const {
    mutate: editExpense,
    isPending,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: (data) => updateExpenseAPI(Number(expenseId), data),
    networkMode: "always",
    onError: (err) => {
      const error = normalizeError(err);
      const errorMessage = getErrorMessage(error);
      showError(errorMessage);
    },
    onMutate: (data) => {
      queryClient.setQueryData(["expenses"], (cur) => {
        return cur.map((exp) => {
          if (exp.id === data.id) return data;
          return exp;
        });
      });
    },
  });
  return { editExpense, isPending, isSuccess, reset };
}
