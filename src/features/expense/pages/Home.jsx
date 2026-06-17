import { GoPlus } from "react-icons/go";
import Button from "../../../components/ui/Button";
import AppLayout from "../../../components/layout/AppLayout";
import ExpensesList from "../components/ExpensesList";
import { useGetExpenses } from "../hooks/useGetExpenses";

export default function Home() {
  const { expenses, error, isLoading } = useGetExpenses();
  console.log({ error });
  if (isLoading) return <h1>loading</h1>;
  return (
    <AppLayout.Main>
      <div className="text-text-1/40 relative flex h-full flex-col items-center gap-4 py-5 text-center">
        {expenses.length ? (
          <ExpensesList />
        ) : (
          <>
            <div className="bg-one/5 absolute flex h-40 w-40 items-center justify-center rounded-full">
              <img
                src="/Logo.png"
                alt="No expenses"
                className="h-20 w-20 opacity-20 grayscale"
              />
            </div>
            <div className="w-full">
              <p className="text-text-1/60 text-lg font-medium">
                No expenses yet
              </p>
              <p className="text-sm">
                Tap the + button to add your first expense
              </p>
            </div>
          </>
        )}
      </div>
    </AppLayout.Main>
  );
}
