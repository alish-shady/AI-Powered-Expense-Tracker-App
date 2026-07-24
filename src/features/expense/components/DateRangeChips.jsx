import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
export default function DateRangeChips() {
  return (
    <ToggleGroup type="multiple" variant="outline" size="2xs">
      <ToggleGroupItem value="react">React</ToggleGroupItem>
      <ToggleGroupItem value="vue">Vue</ToggleGroupItem>
    </ToggleGroup>
  );
}
