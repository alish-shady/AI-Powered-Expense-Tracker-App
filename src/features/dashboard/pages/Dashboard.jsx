import AppLayout from "#components/layout/AppLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <AppLayout.Main>
      <div className="flex w-full flex-wrap gap-4">
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
    </AppLayout.Main>
  );
}
