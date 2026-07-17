import AppButton from "#components/common/AppButton";
import { Plus } from "lucide-react";
import { useAddBudget } from "../hooks/useAddBudget";
import { Spinner } from "#components/ui/spinner";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  PopoverTitle,
  PopoverDescription,
} from "#components/ui/popover";
import SelectCategory from "@/features/expense/components/SelectCategory";
export default function AddBudgetButton() {
  const { addBudget, isPending, data } = useAddBudget();
  console.log({ data });
  function handleClick() {}
  return (
    <Popover>
      <PopoverTrigger
        render={
          <AppButton
            size="xs"
            variant="filled"
            className="flex size-7 min-w-fit"
          >
            <span className="hidden sm:flex">
              {!isPending ? "Add Budget" : "Adding..."}
            </span>
            {!isPending ? <Plus className="size-4" /> : <Spinner />}
          </AppButton>
        }
      ></PopoverTrigger>
      <PopoverContent align="start" alignOffset={0} side="bottom">
        <PopoverHeader>
          <PopoverTitle>Add </PopoverTitle>
          <PopoverDescription>Your next budget</PopoverDescription>
          <form>
            <SelectCategory
              watch={() => {}}
              register={() => {}}
              smart={false}
            />
          </form>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
