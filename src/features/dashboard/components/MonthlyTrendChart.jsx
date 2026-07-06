import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "#components/ui/card";

const chartData = [
  { month: "Jan", expenses: 20 },
  { month: "Feb", expenses: 120 },
  { month: "Mar", expenses: 98 },
  { month: "Apr", expenses: 44 },
  { month: "May", expenses: 300 },
  { month: "Jun", expenses: 50 },
  { month: "Jul", expenses: 400 },
];

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "var(--chart-2)",
  },
};

export function MonthlyTrendChart() {
  return (
    <Card className="mx-auto aspect-auto w-full justify-start gap-4 overflow-visible [--card-spacing:--spacing(4)] sm:gap-5 sm:[--card-spacing:--spacing(6)] lg:gap-6 lg:[--card-spacing:--spacing(8)]">
      <CardHeader className="items-center">
        <CardTitle className="text-base">Expenses</CardTitle>
        <CardDescription>By month</CardDescription>
      </CardHeader>

      <CardContent className="flex justify-center p-0">
        <ChartContainer
          className="h-[300px] min-h-[200px] w-full"
          config={chartConfig}
        >
          <BarChart
            data={chartData}
            responsive
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />

            <YAxis tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar dataKey="expenses" fill="var(--color-expenses)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
