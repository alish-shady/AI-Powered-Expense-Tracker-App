import { useAddExpense } from "../hooks/useAddExpense";
import ExpenseDetails from "../../../components/ui/ExpenseDetails";
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
