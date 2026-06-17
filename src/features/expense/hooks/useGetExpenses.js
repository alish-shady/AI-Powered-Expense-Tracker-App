import { useQuery } from "@tanstack/react-query";
import { getExpensesAPI } from "../../../services/apiAuth";

export function useGetExpenses() {
  const {
    data: expenses,
    error,
    isSuccess,
    isLoading,
  } = useQuery({ queryKey: ["expenses"], queryFn: getExpensesAPI });
  if (error) throw new Error(error.message);
  return { expenses, isSuccess, isLoading };
}
