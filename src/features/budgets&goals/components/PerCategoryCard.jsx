import AppButton from "#components/common/AppButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "#components/ui/card";
import { Progress, ProgressValue } from "#components/ui/progress";
import { PencilLine } from "lucide-react";

export default function PerCategoryCard({
  children,
  value = "loading",
  budget,
  expense,
  fraction,
}) {
  return (
    <Card className="h-28 w-full py-4">
      <CardHeader className="gap-2">
        <CardTitle className="flex items-center justify-between">
          {children}
          <AppButton
            size="xs"
            variant="filled"
            className="flex size-6 min-w-fit"
          >
            <PencilLine className="size-3" />
          </AppButton>
        </CardTitle>
        <CardDescription>
          <Progress value={fraction} className="text-xs">
            <span>
              ${expense} of ${budget}
            </span>
            <ProgressValue />
          </Progress>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
