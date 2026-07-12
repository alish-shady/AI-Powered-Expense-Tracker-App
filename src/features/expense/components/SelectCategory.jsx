import AppButton from "#components/common/AppButton";
import Select from "#components/common/Select";
import { showError } from "@/utils/showError";
import { useGetCategory } from "../hooks/useGetCategory";
import { getErrorMessage, normalizeError } from "#lib/utils";

export default function SelectCategory({ error, setValue, watch, register }) {
  const description = watch("description");
  const { categories, getCategories, isFetching } = useGetCategory(description);
  async function handleAIDecide() {
    if (isFetching) return;
    const { data, error: err, isSuccess } = await getCategories();
    if (isSuccess && data.length)
      setValue("category", data[0].label, {
        shouldDirty: true,
      });
    if (err) {
      const error = normalizeError(err);
      const errorMessage = getErrorMessage(error);
      showError(errorMessage);
    }
  }
  return (
    <div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-[minmax(0,70%)_minmax(0,1fr)]">
      <Select
        label="Category"
        options={categories}
        error={error}
        setValue={setValue}
        watch={watch}
        {...register("category", { required: "Please select a category" })}
      />

      <AppButton
        type="button"
        variant="outline"
        size="xs"
        onClick={handleAIDecide}
        disabled={isFetching}
        className={`self-end ${isFetching ? "animate-custom-pulse" : ""}`}
      >
        {isFetching ? "Deciding..." : "Let AI decide"}
      </AppButton>
    </div>
  );
}
