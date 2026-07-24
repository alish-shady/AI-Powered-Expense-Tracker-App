import { Checkbox } from "#components/ui/checkbox";
import { useState } from "react";

export default function CategoryCheckbox({ label, category }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center gap-2 text-xs">
      <Checkbox checked={checked} onCheckedChange={setChecked} />
      <span>{label}</span>
    </div>
  );
}
