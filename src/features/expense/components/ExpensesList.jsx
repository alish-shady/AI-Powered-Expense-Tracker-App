import { useState } from "react";
import Heading from "../../../components/ui/Heading";
import ListItem from "../../../components/ui/ListItem";
import { useGetExpenses } from "../hooks/useGetExpenses";
import ConfirmDelete from "./ConfirmDelete";
export default function ExpensesList() {
  const { expenses } = useGetExpenses();
  const [showDeleteForm, setShowDeleteForm] = useState({
    show: false,
    expenseId: null,
  });
  return (
    <div className="fade-bottom custom-scrollbar grid w-full gap-8 overflow-y-auto px-4">
      <Heading as="h1">Your Expenses</Heading>
      <ul className="space-y-2">
        {expenses.map((exp, i) => (
          <ListItem
            expense={exp}
            position={i + 1}
            key={exp.id}
            setShowDeleteForm={setShowDeleteForm}
          />
        ))}
      </ul>
      {showDeleteForm.show && (
        <ConfirmDelete
          showDeleteForm={showDeleteForm}
          setShowDeleteForm={setShowDeleteForm}
        />
      )}
    </div>
  );
}
