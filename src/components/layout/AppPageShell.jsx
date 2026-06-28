import AppLayout from "./AppLayout";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router";
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

export default function AppPageShell({ children, Header, showButton = false }) {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <AppLayout.Header>{Header && <Header />}</AppLayout.Header>

      {children}

      <AppLayout.Footer navItems={navItems}>
        {showButton && (
          <button
            className="bg-one text-three shadow-one/40 absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-90"
            onClick={() => {
              navigate("/app/expenses/add", { replace: true });
            }}
            aria-label="Add expense"
          >
            <GoPlus className="text-md cursor-pointer" />
          </button>
        )}
      </AppLayout.Footer>
    </AppLayout>
  );
}
