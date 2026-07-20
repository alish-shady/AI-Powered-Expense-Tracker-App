import { useGetExpenses } from "@/features/expense/hooks/useGetExpenses";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useGetBudgets } from "./useGetBudgets";
import { getMonthRange } from "#lib/utils";

export function useBudgetCardGroupData() {
  const [searchParams] = useSearchParams();
  const currentMonth = searchParams.get("month");
  const dateRange = getMonthRange(currentMonth);
  const { expenses, isLoading: expensesLoading } = useGetExpenses(dateRange);
  const { budgets, isLoading: budgetsLoading } = useGetBudgets(null);
  const budgetCardsData = useMemo(() => {
    const budgetsPerCategory = budgets.map((budget) => {
      const expenseAmount = expenses.reduce(
        (total, exp) =>
          exp.category === budget.category ? total + exp.amount : total,
        0,
      );
      const fraction = Math.round((expenseAmount / budget.amount) * 100);
      return {
        budgetAmount: budget.amount,
        category: budget.category,
        fraction,
        expenseAmount,
      };
    });
    return budgetsPerCategory;
  }, [expenses, budgets]);
  return { budgetCardsData, isLoading: expensesLoading || budgetsLoading };
}
