import { useEffect } from "react";
import Button from "../../../components/common/AppButton";
import Heading from "../../../components/common/Heading";
import { useDeleteExpense } from "../hooks/useDeleteExpense";

export default function ConfirmDelete({ showDeleteForm, setShowDeleteForm }) {
  const { deleteExpense, error, isPending, isSuccess } = useDeleteExpense();

  useEffect(() => {
    if (isSuccess && !error) {
      setShowDeleteForm({ show: false, expenseId: null });
    }
  }, [isSuccess, setShowDeleteForm, error]);

  function handleBackdropClick(e) {
    if (e.target !== e.currentTarget) return;
    setShowDeleteForm({ show: false, expenseId: null });
  }

  return (
    <div
      className="bg-three/50 backdrop-blur-xs animate-fade-in fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="bg-three w-full max-w-md rounded-xl p-6 shadow-2xl">
        <Heading as="h3" className="text-one font-semibold">
          Are You Sure You Want To Delete This Expense?
        </Heading>

        <div className="mt-6 flex justify-between gap-5">
          <Button
            variant="outline"
            size="sm"
            type="button"
            onClick={() => setShowDeleteForm({ show: false, expenseId: null })}
            className="border-one/30 text-one hover:bg-one/5 hover:border-one flex-1 border bg-transparent duration-200"
          >
            Cancel
          </Button>

          <Button
            variant="destructive"
            size="sm"
            type="button"
            onClick={() => deleteExpense(showDeleteForm.expenseId)}
            className={`flex-1 duration-200 ${
              isPending ? "animate-custom-pulse" : ""
            }`}
          >
            {isPending ? "Deleting..." : "Delete"}
          </Button>
        </div>
      </div>
    </div>
  );
}
