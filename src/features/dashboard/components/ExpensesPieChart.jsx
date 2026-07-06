import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { category: "food", expense: 275, fill: "var(--color-food)" },
  { category: "transport", expense: 200, fill: "var(--color-transport)" },
  { category: "shopping", expense: 187, fill: "var(--color-shopping)" },
  {
    category: "entertainment",
    expense: 173,
    fill: "var(--color-entertainment)",
  },
  { category: "health", expense: 90, fill: "var(--color-health)" },
];

const chartConfig = {
  food: {
    label: "Food",
    color: "var(--chart-1)",
  },
  transport: {
    label: "Transport",
    color: "var(--chart-2)",
  },
  shopping: {
    label: "Shopping",
    color: "var(--chart-3)",
  },
  entertainment: {
    label: "Entertainment",
    color: "var(--chart-4)",
  },
  health: {
    label: "Health",
    color: "var(--chart-5)",
  },
};

export default function ExpensesPieChart() {
  return (
    <Card className="mx-auto aspect-auto w-full justify-start gap-4 overflow-visible [--card-spacing:--spacing(4)] sm:gap-5 sm:[--card-spacing:--spacing(6)] lg:max-w-lg lg:gap-6 lg:[--card-spacing:--spacing(8)]">
      <CardHeader className="items-center">
        <CardTitle className="text-base">Expenses</CardTitle>
        <CardDescription>By category</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[300px] min-h-[200px] w-80"
        >
          <PieChart accessibilityLayer>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent nameKey="category" />}
              className="w-44"
            />

            <Pie
              data={chartData}
              dataKey="expense"
              nameKey="category"
              outerRadius={110}
            />

            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="flex-wrap gap-2"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
