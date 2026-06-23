import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import AppLayout from "../layout/AppLayout";
import { useParams } from "react-router";
import { useGetExpense } from "../../features/expense/hooks/useGetExpense";
export default function ExpenseDetails({
  mutate,
  isSuccess,
  resetMutation,
  isPending,
}) {
  const { expenseId } = useParams();
  const isEditSession = Boolean(expenseId);
  const { expense: selectedExpense, isLoading } = useGetExpense(
    Number(expenseId),
  );
  console.log({ EXPENSE: selectedExpense });
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      amount: "",
      category: "Food",
      description: "",
    },
  });
  useEffect(() => {
    if (!selectedExpense) return;

    reset({
      amount: selectedExpense.amount,
      category: selectedExpense.category,
      description: selectedExpense.description,
    });
  }, [selectedExpense, reset]);
  useEffect(() => {
    if (isDirty && isSuccess) resetMutation();
  }, [isDirty, isSuccess, resetMutation]);
  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Entertainment",
    "Health",
    "Other",
  ];
  function onSubmit(data) {
    mutate({
      ...data,
      ...(selectedExpense && isEditSession && { id: selectedExpense.id }),
    });
    reset(data);
  }
  const buttonText = isSuccess ? "Expense Saved!" : "Save Expense";
  return (
    <AppLayout.Main>
      <form
        noValidate
        className={`"flex gap-6" flex-col ${isLoading && isEditSession ? "animate-custom-pulse backdrop-blur-2xl" : ""}`}
        onSubmit={handleSubmit(onSubmit)}
        disabled={isLoading && isEditSession}
      >
        <div className="flex flex-col gap-5">
          <Input
            type="number"
            label="Amount"
            placeholder="0.00"
            error={errors.amount}
            {...register("amount", {
              required: "Amount is required",
              min: { value: 0.01, message: "Amount must be greater than 0" },
            })}
          />

          <Select
            label="Category"
            options={categories}
            error={errors.category}
            setValue={setValue}
            watch={watch}
            {...register("category", { required: "Please select a category" })}
          />

          <Input
            type="textarea"
            label="Description"
            placeholder="What was this for?"
            error={errors.description}
            {...register("description", {
              required: "Description is required",
              minLength: { value: 3, message: "Description is too short" },
            })}
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            className={`shadow-one/20 shadow-lg ${isPending ? "animate-custom-pulse" : ""}`}
          >
            {isPending ? "Saving Expense..." : buttonText}
          </Button>
        </div>
      </form>
    </AppLayout.Main>
  );
}
