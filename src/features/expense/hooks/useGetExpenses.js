import { useQuery } from "@tanstack/react-query";
import { getExpensesAPI } from "../../../services/apiAuth";

export function useGetExpenses() {
  const {
    data: expenses = [],
    error,
    isError,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpensesAPI,
  });
  //ERROR HANDLING FOR QUERIES
  return { expenses, error, isError, isSuccess, isLoading };
}
