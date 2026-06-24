import AppLayout from "../../../components/layout/AppLayout";
import ExpenseDetails from "../components/ExpenseDetails";
import { useEditExpense } from "../hooks/useEditExpense";

export default function EditExpense() {
  const {
    editExpense,
    isPending,
    isSuccess,
    reset: resetMutation,
  } = useEditExpense();
  return (
    <ExpenseDetails
      mutate={editExpense}
      isPending={isPending}
      isSuccess={isSuccess}
      resetMutation={resetMutation}
    />
  );
}
