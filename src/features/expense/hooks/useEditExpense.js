import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExpenseAPI } from "../../../services/apiAuth";
import { useParams } from "react-router";

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
    onError: (err) => {
      console.log(err);
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
