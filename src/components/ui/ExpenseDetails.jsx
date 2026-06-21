import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import AppLayout from "../layout/AppLayout";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
export default function ExpenseDetails({
  mutate,
  isSuccess,
  resetMutation,
  isPending,
}) {
  const { expenseId } = useParams();
  const queryClient = useQueryClient();
  const expenses = queryClient.getQueryData(["expenses"]) || [];
  const selectedExpense = expenseId
    ? expenses.find((exp) => exp.id == expenseId)
    : {};
  console.log({ selectedExpense });
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      amount: selectedExpense?.amount || "",
      category: selectedExpense?.category || "Food",
      description: selectedExpense?.description || "",
    },
  });
  useEffect(() => {
    console.log(isDirty);
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
      ...(selectedExpense && { id: selectedExpense?.id }),
    });
    reset(data);
  }
  const buttonText = isSuccess ? "Expense Saved!" : "Save Expense";
  return (
    <AppLayout.Main>
      <form
        noValidate
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
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
