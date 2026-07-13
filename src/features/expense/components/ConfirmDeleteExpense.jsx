import { useEffect } from "react";
import { useDeleteExpense } from "../hooks/useDeleteExpense";
import AppButton from "#components/common/AppButton";
import Modal from "#components/common/Modal";
export default function ConfirmDeleteExpense({
  setShowDeleteForm,
  selectedExpenseId,
}) {
  const { deleteExpense, error, isPending, isSuccess } = useDeleteExpense();

  useEffect(() => {
    if (isSuccess && !error) {
      setShowDeleteForm(false);
    }
  }, [isSuccess, setShowDeleteForm, error]);
  function handleClick() {
    if (!selectedExpenseId) return;
    deleteExpense(selectedExpenseId);
  }

  return (
    <Modal
      heading="Are You Sure You Want To Delete This Expense?"
      setShowForm={setShowDeleteForm}
    >
      <AppButton
        variant="destructive"
        size="sm"
        type="button"
        onClick={handleClick}
        className={`flex-1 duration-200 ${
          isPending ? "animate-custom-pulse" : ""
        }`}
      >
        {isPending ? "Deleting..." : "Delete"}
      </AppButton>
    </Modal>
  );
}
