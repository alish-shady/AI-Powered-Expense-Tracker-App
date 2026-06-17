import { useForm } from "react-hook-form";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import Select from "../../../components/ui/Select";
import AppLayout from "../../../components/layout/AppLayout";
import { useAddExpense } from "../hooks/useAddExpense";
import { useEffect } from "react";
export default function AddExpense({ onSuccess }) {
  const {
    addExpense,
    isPending,
    isSuccess,
    reset: resetMutation,
  } = useAddExpense();
  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      amount: "",
      category: "Food",
      description: "",
    },
  });

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
    addExpense(data);
    reset();
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
