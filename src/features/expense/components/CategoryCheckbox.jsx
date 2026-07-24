import { Checkbox } from "#components/ui/checkbox";
import { useController, useFormContext } from "react-hook-form";

export default function CategoryCheckbox({ label, category }) {
  const { control } = useFormContext();
  const { field } = useController({
    name: "categories",
    control,
  });
  const selected = field.value || [];
  const isChecked = selected.includes(label);
  return (
    <div className="flex items-center gap-2 text-xs">
      <Checkbox
        checked={isChecked}
        onCheckedChange={(checked) => {
          if (checked) {
            field.onChange([...selected, label]);
          } else {
            field.onChange(selected.filter((cat) => cat !== label));
          }
        }}
      />
      <span>{label}</span>
    </div>
  );
}
