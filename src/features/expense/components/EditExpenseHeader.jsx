import { IoChevronBack } from "react-icons/io5";
import Heading from "../../../components/common/Heading";
import { useNavigate } from "react-router";
export default function EditExpenseHeader() {
  const navigate = useNavigate();
  return (
    <div className="relative flex w-full items-center justify-center">
      <button
        onClick={() => navigate("/app/home", { replace: true })}
        className="text-one hover:bg-one/10 absolute left-0 cursor-pointer rounded-xl p-2 transition-colors active:scale-90"
        aria-label="Go back"
      >
        <IoChevronBack className="text-2xl" />
      </button>
      <Heading as="h3" className="text-one font-semibold tracking-tight">
        Edit Expense
      </Heading>
    </div>
  );
}
