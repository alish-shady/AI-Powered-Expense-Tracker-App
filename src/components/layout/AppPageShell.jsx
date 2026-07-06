import AppLayout from "./AppLayout";
import { GoPlus } from "react-icons/go";
import { NavLink, useNavigate } from "react-router";
import {
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineWallet,
  HiOutlineUser,
} from "react-icons/hi2";

const navItems = [
  { icon: HiOutlineHome, label: "home" },
  { icon: HiOutlineChartPie, label: "dashboard" },
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
        <nav>
          <ul className="mx-auto flex max-w-sm items-center justify-between">
            {navItems.map((item, index) => (
              <li key={index} className="flex flex-col items-center gap-1">
                <NavLink to={`/app/${item.label}`}>
                  {({ isActive }) => (
                    <button
                      className={`cursor-pointer rounded-xl p-2 transition-all duration-200 ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/40 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      <item.icon className="text-2xl" />
                    </button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </AppLayout.Footer>
    </AppLayout>
  );
}
