import { IoChevronBack } from "react-icons/io5";
import Heading from "../../../components/ui/Heading";
export default function AddExpenseHeader({ onCancel }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        onClick={onCancel}
        className="text-one hover:bg-one/10 absolute left-0 rounded-xl p-1.5 transition-colors active:scale-90"
        aria-label="Go back"
      >
        <IoChevronBack className="text-2xl" />
      </button>
      <Heading as="h3" className="text-one font-semibold tracking-tight">
        Add Expense
      </Heading>
    </div>
  );
}
