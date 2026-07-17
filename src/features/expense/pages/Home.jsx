import { Spinner } from "#components/ui/spinner";
import AppLayout from "../../../components/layout/AppLayout";
import ExpensesList from "../components/ExpensesList";
import { useGetExpenses } from "../hooks/useGetExpenses";

export default function Home() {
  const { expenses, isLoading } = useGetExpenses();

  if (isLoading) return <Spinner />;
  return (
    <AppLayout.Main>
      <div className="text-primary-foreground/40 relative flex h-full flex-col items-center gap-4 text-center">
        {expenses.length ? (
          <ExpensesList />
        ) : (
          <>
            <div className="bg-primary/5 absolute top-full flex h-40 w-40 items-center justify-center rounded-full">
              <img
                src="/Logo.png"
                alt="No expenses"
                className="h-20 w-20 opacity-20 grayscale"
              />
            </div>
            <div className="text-muted-foreground flex h-full w-full flex-col items-center justify-center">
              <p className="text-lg font-medium">No expenses yet</p>
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
