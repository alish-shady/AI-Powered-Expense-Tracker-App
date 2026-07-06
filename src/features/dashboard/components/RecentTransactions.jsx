import {
  Card,
  CardDescription,
  CardHeader,
  CardContent,
  CardTitle,
} from "#components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    name: "Weekly groceries",
    category: "Food",
    price: "62.20",
    date: "Jun 28",
  },
  {
    name: "Uber ride",
    category: "Transport",
    price: "18.50",
    date: "Jun 27",
  },
  {
    name: "Netflix subscription",
    category: "Entertainment",
    price: "62.20",
    date: "Jun 22",
  },
  {
    name: "Coffee",
    category: "Food",
    price: "5.40",
    date: "Jun 21",
  },
];

export default function RecentTransactions() {
  return (
    <Card className="mx-auto aspect-auto w-full justify-start gap-4 overflow-visible [--card-spacing:--spacing(4)] sm:gap-5 sm:[--card-spacing:--spacing(6)] lg:gap-6 lg:[--card-spacing:--spacing(8)]">
      <CardHeader className="items-center">
        <CardTitle className="text-base">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center p-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tran) => {
              return (
                <TableRow key={tran.name}>
                  <TableCell className="font-medium">{tran.name}</TableCell>
                  <TableCell>{tran.category}</TableCell>
                  <TableCell className="text-primary">{tran.price}</TableCell>
                  <TableCell className="text-right">{tran.date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
