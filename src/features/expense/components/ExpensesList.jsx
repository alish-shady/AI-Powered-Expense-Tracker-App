import Heading from "../../../components/ui/Heading";
import ListItem from "../../../components/ui/ListItem";
import { useGetExpenses } from "../hooks/useGetExpenses";

export default function ExpensesList() {
  const { expenses } = useGetExpenses();
  return (
    <div className="grid w-full gap-4">
      <Heading as="h1">Your Expenses</Heading>
      <ul className="space-y-2">
        {expenses.map((exp, i) => (
          <ListItem
            category={exp.category}
            amount={exp.amount}
            position={i + 1}
            key={i}
          />
        ))}
      </ul>
    </div>
  );
}
