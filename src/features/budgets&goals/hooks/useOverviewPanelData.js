import { useGetExpenses } from "@/features/expense/hooks/useGetExpenses";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useGetBudgets } from "./useGetBudgets";
import { getMonthRange } from "#lib/utils";

export function useOverviewPanelData() {
  const [searchParams] = useSearchParams();
  const currentMonth = searchParams.get("month");
  const dateRange = getMonthRange(currentMonth);
  const { expenses, isLoading: expensesLoading } = useGetExpenses(dateRange);
  const { budgets, isLoading: budgetsLoading } = useGetBudgets(dateRange);
  const overviewData = useMemo(() => {
    const totalSpent = expenses.reduce((acc, exp) => acc + exp.amount, 0);
    const totalBudget = budgets.reduce((acc, bud) => acc + bud.amount, 0);
    const remaining = totalBudget - totalSpent;
    const fraction = Math.round((totalSpent / totalBudget) * 100);
    return {
      totalSpent,
      remaining,
      totalBudget,
      fraction: isNaN(fraction) ? 0 : fraction,
    };
  }, [expenses, budgets]);
  return { overviewData, isLoading: expensesLoading || budgetsLoading };
}
