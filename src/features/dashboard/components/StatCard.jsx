import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "#components/ui/card";

export default function StatCard({ children, value = "loading" }) {
  return (
    <Card className="xs:w-fit h-28 w-screen">
      <CardHeader className="w-screen">
        <CardTitle className="flex items-center gap-2">{children}</CardTitle>
        <CardDescription>{value}</CardDescription>
      </CardHeader>
    </Card>
  );
}
