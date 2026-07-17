import PerCategoryCard from "./PerCategoryCard";
export default function PerCategoryCardGroup() {
  return (
    <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
      <PerCategoryCard>Food</PerCategoryCard>
      <PerCategoryCard>Food</PerCategoryCard>
      <PerCategoryCard>Food</PerCategoryCard>
      <PerCategoryCard>Food</PerCategoryCard>
      <PerCategoryCard>Food</PerCategoryCard>
      <PerCategoryCard>Food</PerCategoryCard>
    </div>
  );
}
