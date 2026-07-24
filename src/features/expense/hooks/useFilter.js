import { getDateRange } from "#lib/utils";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

export function useFilter() {
  const [searchParams] = useSearchParams();
  const filters = useMemo(() => {
    const params = Object.fromEntries(searchParams.entries());
    const dateRange = getDateRange(params.dateRange);
    return {
      search: params.search ?? "",
      categories: params.categories ? params.categories.split(",") : [],
      date: { period: params.dateRange, dateRange },
      minAmount: params.minAmount ? Number(params.minAmount) : undefined,
      maxAmount: params.maxAmount ? Number(params.maxAmount) : undefined,
    };
  }, [searchParams]);
  return filters;
}
