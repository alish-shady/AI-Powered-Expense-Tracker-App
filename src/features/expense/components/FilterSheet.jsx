import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AppButton from "#components/common/AppButton";
import { Funnel } from "lucide-react";
import Input from "#components/common/Input";
import Heading from "#components/common/Heading";
import { CategoryCheckboxGroup } from "./CategoryCheckboxGroup";
import DateRangeChips from "./DateRangeChips";

export function FilterSheet() {
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger
          render={
            <AppButton className="my-4 mr-auto flex items-center rounded-md text-xs">
              <Funnel /> Filter{" "}
              <span className="bg-secondary text-secondary-foreground text-2xs flex size-4 items-center justify-center rounded-full">
                1
              </span>
            </AppButton>
          }
        />
        <SheetContent
          side="bottom"
          className="max-h-[80vh] overflow-y-auto rounded-t-2xl"
        >
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <form className="flex flex-col gap-4 px-4">
            <Input
              type="text"
              label="Name or description"
              // disabled={isPending}
              // error={errors.name}
              // {...register("name", {
              //   required: "Full name is required",
              //   validate: (v) =>
              //     v.trim().split(/\s+/).length >= 2 ||
              //     "Please enter both your first and last name.",
              // })}
            />
            <div className="flex flex-col gap-2">
              <Heading as="h2" size="h5" className="font-medium">
                Category
              </Heading>
              <CategoryCheckboxGroup />
            </div>
            <div className="flex flex-col gap-2">
              <Heading as="h2" size="h5" className="font-medium">
                Date range
              </Heading>
              <DateRangeChips />
            </div>
          </form>
          <SheetFooter>
            <AppButton type="submit">Save changes</AppButton>
            <SheetClose
              render={<AppButton variant="outline">Cancel</AppButton>}
            />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
