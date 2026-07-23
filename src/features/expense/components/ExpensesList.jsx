import Heading from "../../../components/common/Heading";
import ListItem from "../../../components/common/ListItem";
import { useGetExpenses } from "../hooks/useGetExpenses";
import { ItemGroup } from "#components/ui/item";
export default function ExpensesList() {
  const { expenses } = useGetExpenses();
  return (
    <div className="fade-bottom w-full gap-8 px-4">
      <Heading as="h1">Your Expenses</Heading>
      <ItemGroup className="">
        {expenses.map((exp, i) => (
          <ListItem expense={exp} position={i + 1} key={exp.id} />
        ))}
      </ItemGroup>
    </div>
  );
}
