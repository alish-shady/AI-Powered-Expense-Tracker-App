import { useGetExpenses } from "@/features/expense/hooks/useGetExpenses";
import { useMemo } from "react";
import { useSearchParams } from "react-router";
function getMonthRange(month) {
  const [year, monthNumber] = month.split("-").map(Number);
  return {
    start: new Date(Date.UTC(year, monthNumber - 1, 1)).toISOString(),
    end: new Date(Date.UTC(year, monthNumber, 1)).toISOString(),
  };
}
export function useOverviewPanelData() {
  const [searchParams] = useSearchParams();
  const currentMonth = searchParams.get("month");
  console.log(currentMonth);
  const dateRange = getMonthRange(currentMonth);
  const { expenses, isLoading } = useGetExpenses(dateRange);
  const overviewData = useMemo(() => {});
  return overviewData;
}
