import AppButton from "#components/common/AppButton";
import { Plus } from "lucide-react";
export default function AddBudgetButton() {
  return (
    <AppButton size="xs" variant="filled" className="flex size-7 min-w-fit">
      <span className="hidden sm:flex">Add Budget</span>
      <Plus className="size-4" />
    </AppButton>
  );
}
