import { Calendar1, ReceiptText, Tag, Wallet } from "lucide-react";
import { useDashboardStats } from "../hooks/useDashboardStats";
import SkeletonCard from "./SkeletonCard";
import StatCard from "./StatCard";
export default function StatGroup() {
  const { stats, isLoading } = useDashboardStats();
  const entries = Object.entries(stats);
  const labels = {
    thisMonthTotal: (
      <>
        <Wallet className="size-5" /> This Month
      </>
    ),
    dailyAvg: (
      <>
        <Calendar1 className="size-5" /> Daily Average
      </>
    ),
    topCategory: (
      <>
        <Tag className="size-5" /> Top Category
      </>
    ),
    transactions: (
      <>
        <ReceiptText className="size-5" /> Transactions
      </>
    ),
  };

  return (
    <>
      {entries.map((stat) => {
        return isLoading ? (
          <SkeletonCard key={stat[0]} />
        ) : (
          <StatCard key={stat[0]} value={stat[1]}>
            {labels[stat[0]]}
          </StatCard>
        );
      })}
    </>
  );
}
