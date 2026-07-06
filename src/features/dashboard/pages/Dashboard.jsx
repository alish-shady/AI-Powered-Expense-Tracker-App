import AppLayout from "#components/layout/AppLayout";
import ExpensesPieChart from "../components/ExpensesPieChart";
import { MonthlyTrendChart } from "../components/MonthlyTrendChart";
import RecentTransactions from "../components/RecentTransactions";
import StatGroup from "../components/StatGroup";

export default function Dashboard() {
  return (
    <AppLayout.Main>
      <div className="flex w-full flex-wrap justify-between gap-4 py-4 xl:justify-center xl:gap-x-8">
        <StatGroup />
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-[32rem_1fr]">
          <ExpensesPieChart />
          <MonthlyTrendChart />
        </div>
        <RecentTransactions />
      </div>
    </AppLayout.Main>
  );
}
