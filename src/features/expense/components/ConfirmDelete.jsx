import { useEffect } from "react";
import Button from "../../../components/ui/Button";
import Heading from "../../../components/ui/Heading";
import { useDeleteExpense } from "../hooks/useDeleteExpense";

export default function ConfirmDelete({ showDeleteForm, setShowDeleteForm }) {
  const { deleteExpense, error, isPending, isSuccess } = useDeleteExpense();
  useEffect(() => {
    if (isSuccess && !error)
      setShowDeleteForm({ show: false, expenseId: null });
  }, [isSuccess, setShowDeleteForm, error]);
  function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) return;
    setShowDeleteForm({ show: false, expenseId: null });
  }
  return (
    <div
      className="bg-three/50 bg backdrop-blur-xs fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <form className="bg-three absolute left-1/2 top-1/2 flex aspect-video max-w-fit -translate-x-1/2 -translate-y-1/2 flex-col justify-between gap-8 rounded-xl p-16 shadow-2xl drop-shadow-2xl">
        <Heading as="h2">Are You Sure You Want To Delete This Expense?</Heading>
        <div className="flex justify-between gap-8">
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => setShowDeleteForm({ show: false, expenseId: null })}
            className="flex-1 border-gray-300 text-gray-600 duration-75 hover:bg-gray-50"
          >
            Cancel
          </Button>
          <Button
            className={`bg-error hover:bg-error/90 hover:border-one text-three flex-1 duration-75 ${isPending ? "animate-custom-pulse" : ""}`}
            variant="none"
            type="button"
            onClick={() => deleteExpense(showDeleteForm.expenseId)}
            size="sm"
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </form>
    </div>
  );
}
