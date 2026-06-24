import ExpenseDetails from "../components/ExpenseDetails";
import { useAddExpense } from "../hooks/useAddExpense";
export default function AddExpense({ onSuccess }) {
  const {
    addExpense,
    isPending,
    isSuccess,
    reset: resetMutation,
  } = useAddExpense();
  return (
    <ExpenseDetails
      mutate={addExpense}
      isPending={isPending}
      isSuccess={isSuccess}
      resetMutation={resetMutation}
    />
  );
}
