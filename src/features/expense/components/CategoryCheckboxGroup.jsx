import CategoryCheckbox from "./CategoryCheckbox";

export function CategoryCheckboxGroup() {
  return (
    <div className="grid grid-cols-2">
      <CategoryCheckbox label="Dining Out" />
      <CategoryCheckbox label="Parking" />
      <CategoryCheckbox label="Subscriptions" />
    </div>
  );
}
