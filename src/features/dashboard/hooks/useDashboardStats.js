import { useGetExpenses } from "@/features/expense/hooks/useGetExpenses";
import { useMemo } from "react";

export function useDashboardStats() {
  const { expenses, isLoading } = useGetExpenses();
  const stats = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const thisMonthTotal = expenses.reduce((total, expense) => {
      const expenseDate = new Date(expense.created_at);
      const isThisMonth =
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear;
      if (!isThisMonth) return total;
      return total + expense.amount;
    }, 0);
    const numDays = new Set(
      expenses.map((expense) =>
        new Date(expense.created_at).toISOString().slice(0, 10),
      ),
    ).size;
    const totalExpenses = expenses.reduce((total, exp) => {
      return total + exp.amount;
    }, 0);
    const dailyAvg = (totalExpenses / numDays).toFixed(2);

    const counts = expenses.reduce((acc, { category }) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});
    const topCategory = Object.entries(counts).sort(
      (a, b) => b[1] - a[1],
    )[0]?.[0];

    const transactions = expenses.length;
    return {
      stats: {
        thisMonthTotal,
        dailyAvg,
        topCategory,
        transactions,
      },
      isLoading,
    };
  }, [expenses, isLoading]);

  return stats;
}
