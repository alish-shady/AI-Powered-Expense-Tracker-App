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
import { FormProvider, useForm } from "react-hook-form";
import { useSearchParams } from "react-router";

export function FilterSheet() {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      categories: [],
      dateRange: "thisMonth",
    },
  });
  const [searchParams, setSearchParams] = useSearchParams();
  function onSubmit(value) {
    const { categories, dateRange, descriptionOrName, maxAmount, minAmount } =
      value;
    setSearchParams((searchParams) => {
      if (descriptionOrName) {
        searchParams.set("search", descriptionOrName);
      }
      if (categories.length) {
        searchParams.set("categories", categories);
      }
      if (dateRange) {
        searchParams.set("dateRange", dateRange);
      }
      if (minAmount) {
        searchParams.set("minAmount", String(minAmount));
      }
      if (maxAmount) {
        searchParams.set("maxAmount", String(maxAmount));
      }
      return searchParams;
    });
  }
  return (
    <div className="flex flex-wrap gap-2">
      <Sheet>
        <SheetTrigger
          render={
            <AppButton className="my-2 mr-auto flex items-center rounded-md text-xs">
              <Funnel /> Filter{" "}
              <span className="bg-secondary text-secondary-foreground text-2xs flex size-4 items-center justify-center rounded-full">
                1
              </span>
            </AppButton>
          }
        />
        <SheetContent
          side="bottom"
          className="scrollbar-none max-h-[80vh] overflow-y-auto rounded-t-2xl"
        >
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <FormProvider control={control}>
            <form
              id="filter-form"
              className="flex flex-col gap-4 px-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="text"
                label="Name or description"
                // disabled={isPending}
                error={errors.descriptionOrName}
                {...register("descriptionOrName", {
                  maxLength: {
                    value: 200,
                    message: "Max 200 characters.",
                  },
                })}
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
              <div className="flex flex-col gap-2">
                <Heading as="h2" size="h5" className="font-medium">
                  Amount
                </Heading>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    label="None"
                    placeholder="Min"
                    {...register("minAmount", {
                      min: { value: 0, message: "Must be positive." },
                      max: {
                        value: 99999999999999,
                        message: "Maximum 15 digits.",
                      },
                    })}
                  />
                  <span>-</span>
                  <Input
                    type="number"
                    label="None"
                    placeholder="Max"
                    {...register("maxAmount", {
                      min: { value: 0, message: "Must be positive." },
                      max: {
                        value: 99999999999999,
                        message: "Max 15 digits.",
                      },
                    })}
                  />
                </div>
              </div>
            </form>
          </FormProvider>
          <SheetFooter className="gap-4">
            <AppButton type="submit" size="sm" form="filter-form">
              Save changes
            </AppButton>
            <SheetClose
              render={
                <AppButton variant="outline" size="sm">
                  Cancel
                </AppButton>
              }
            />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
