import AppLayout from "./AppLayout";
import { GoPlus } from "react-icons/go";
import Button from "../ui/Button";
import AddExpenseHeader from "../../features/expense/components/AddExpenseHeader";
import EditExpenseHeader from "../../features/expense/components/EditExpenseHeader";
import HomeHeader from "../ui/HomeHeader";
import {
  Outlet,
  useLocation,
  useMatches,
  useNavigate,
  useParams,
} from "react-router";
import {
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineWallet,
  HiOutlineUser,
} from "react-icons/hi2";
const navItems = [
  { icon: HiOutlineHome, label: "home" },
  { icon: HiOutlineChartPie, label: "stats" },
  { icon: HiOutlineWallet, label: "wallet" },
  { icon: HiOutlineUser, label: "profile" },
];
export default function BasePageLayout() {
  const navigate = useNavigate();
  const matches = useMatches();
  const currentRoute = matches.at(-1);
  const showButton = currentRoute.handle?.showButton ?? true;
  const CurrentHeader = currentRoute.handle?.header || HomeHeader;
  return (
    <AppLayout>
      <AppLayout.Header>
        <CurrentHeader />
      </AppLayout.Header>
      <Outlet />
      <AppLayout.Footer navItems={navItems}>
        {showButton && (
          <button
            className="bg-one text-three shadow-one/40 absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-90"
            onClick={() => {
              navigate("/app/expenses/add", { replace: true });
            }}
            aria-label="Add expense"
          >
            <GoPlus className="cursor-pointer text-3xl" />
          </button>
        )}
      </AppLayout.Footer>
    </AppLayout>
  );
}
