import { useState } from "react";
import Heading from "../../../components/common/Heading";
import ListItem from "../../../components/common/ListItem";
import { useGetExpenses } from "../hooks/useGetExpenses";
import { ItemGroup } from "#components/ui/item";
import ConfirmDeleteExpense from "./ConfirmDeleteExpense";
export default function ExpensesList() {
  const { expenses } = useGetExpenses();
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    expenseId: null,
  });
  function openDeleteModal(expenseId) {
    setDeleteModal({
      show: true,
      expenseId,
    });
  }
  function setShowDeleteForm(value) {
    setDeleteModal((current) => {
      const show = typeof value === "function" ? value(current.show) : value;
      return {
        show,
        expenseId: show ? current.expenseId : null,
      };
    });
  }
  return (
    <div className="fade-bottom custom-scrollbar grid w-full gap-8 overflow-y-auto px-4">
      <Heading as="h1">Your Expenses</Heading>
      <ItemGroup className="">
        {expenses.map((exp, i) => (
          <ListItem
            expense={exp}
            position={i + 1}
            key={exp.id}
            onRequestDelete={() => openDeleteModal(exp.id)}
          />
        ))}
      </ItemGroup>
      {deleteModal.show && (
        <ConfirmDeleteExpense
          setShowDeleteForm={setShowDeleteForm}
          selectedExpenseId={deleteModal.expenseId}
        />
      )}
    </div>
  );
}
