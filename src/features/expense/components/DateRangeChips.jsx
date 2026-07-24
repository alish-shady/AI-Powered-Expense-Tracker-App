import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useController, useFormContext } from "react-hook-form";
export default function DateRangeChips() {
  const { control } = useFormContext();

  const { field } = useController({
    name: "dateRange",
    control,
    defaultValue: "thisMonth",
  });
  return (
    <ToggleGroup
      type="single"
      value={field.value}
      onValueChange={(value) => {
        field.onChange(() => value.at(0));
      }}
      variant="outline"
      size="2xs"
    >
      <ToggleGroupItem value="thisMonth">This month</ToggleGroupItem>
      <ToggleGroupItem value="lastMonth">Last month</ToggleGroupItem>
      <ToggleGroupItem value="last3Month">Last 3 months</ToggleGroupItem>
      <ToggleGroupItem value="allTime">All time</ToggleGroupItem>
    </ToggleGroup>
  );
}
