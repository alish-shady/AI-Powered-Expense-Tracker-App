import { useState } from "react";
import Heading from "../../../components/common/Heading";
import ListItem from "../../../components/common/ListItem";
import { useGetExpenses } from "../hooks/useGetExpenses";
import ConfirmDelete from "./ConfirmDelete";
import { ItemGroup } from "#components/ui/item";
export default function ExpensesList() {
  const { expenses } = useGetExpenses();
  const [showDeleteForm, setShowDeleteForm] = useState({
    show: false,
    expenseId: null,
  });
  return (
    <div className="fade-bottom custom-scrollbar grid w-full gap-8 overflow-y-auto px-4">
      <Heading as="h1">Your Expenses</Heading>
      <ItemGroup className="">
        {expenses.map((exp, i) => (
          <ListItem
            expense={exp}
            position={i + 1}
            key={exp.id}
            setShowDeleteForm={setShowDeleteForm}
          />
        ))}
      </ItemGroup>
      {showDeleteForm.show && (
        <ConfirmDelete
          showDeleteForm={showDeleteForm}
          setShowDeleteForm={setShowDeleteForm}
        />
      )}
    </div>
  );
}
