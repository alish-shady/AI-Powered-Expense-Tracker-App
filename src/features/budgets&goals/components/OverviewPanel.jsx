import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "#components/ui/card";
import { Progress } from "#components/ui/progress";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "#components/ui/table";
import { useOverviewPanelData } from "../hooks/useOverviewPanelData";

export default function OverviewPanel() {
  return (
    <Card className="my-6 h-36 w-full justify-between gap-0 py-4">
      <CardHeader className="mb-4 px-4">
        <CardTitle>
          <Table>
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="h-4 text-xs sm:text-sm">
                  Budgeted
                </TableHead>
                <TableHead className="h-4 text-center text-xs sm:text-sm">
                  Spent
                </TableHead>
                <TableHead className="h-4 text-right text-xs sm:text-sm">
                  Remaining
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="py-0 text-xs sm:text-sm">1000</TableCell>
                <TableCell className="py-0 text-center text-xs sm:text-sm">
                  1000
                </TableCell>
                <TableCell className="py-0 text-right text-xs sm:text-sm">
                  1000
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <Progress value={50} id="budget-used" />
      </CardContent>
      <CardFooter className="px-4 text-xs">
        <span>50% of monthly budget used</span>
      </CardFooter>
    </Card>
  );
}
