import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpenseAPI } from "../../../services/apiAuth";

export function useDeleteExpense() {
  const queryClient = useQueryClient();
  const {
    mutate: deleteExpense,
    error,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: deleteExpenseAPI,
    onError: (err) => {
      console.log(err);
    },
    onMutate: (data) => {
      queryClient.setQueryData(["expenses"], (cur) => {
        return cur.filter((exp) => exp.id !== data);
      });
    },
  });

  return { deleteExpense, error, isPending, isSuccess };
}
