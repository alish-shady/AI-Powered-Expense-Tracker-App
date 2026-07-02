import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpenseAPI } from "../../../services/apiAuth";
import { getErrorMessage, normalizeError } from "#lib/utils";
import { showError } from "@/utils/showError";

export function useDeleteExpense() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteExpense,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: deleteExpenseAPI,
    networkMode: "always",
    onError: (err) => {
      const error = normalizeError(err);
      const errorMessage = getErrorMessage(error);
      showError(errorMessage);
    },
    onMutate: (data) => {
      queryClient.setQueryData(["expenses"], (cur) => {
        return cur.filter((exp) => exp.id !== data);
      });
    },
  });

  return { deleteExpense, error, isPending, isSuccess };
}
