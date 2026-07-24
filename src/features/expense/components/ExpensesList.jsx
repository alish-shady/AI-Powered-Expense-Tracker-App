import Heading from "../../../components/common/Heading";
import ListItem from "../../../components/common/ListItem";
import { useGetExpenses } from "../hooks/useGetExpenses";
import { ItemGroup } from "#components/ui/item";
import { FilterSheet } from "./FilterSheet";
import { useFilter } from "../hooks/useFilter";

export default function ExpensesList() {
  const { date } = useFilter();
  const { expenses } = useGetExpenses(date);
  return (
    <div className="fade-bottom w-full px-4">
      <Heading as="h1">Your Expenses</Heading>
      <FilterSheet />
      <ItemGroup>
        {expenses.map((exp, i) => (
          <ListItem expense={exp} position={i + 1} key={exp.id} />
        ))}
      </ItemGroup>
    </div>
  );
}
