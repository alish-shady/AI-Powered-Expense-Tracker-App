import AppLayout from "./AppLayout";
import { GoPlus } from "react-icons/go";
import Button from "../ui/Button";
import { useState } from "react";
import AddExpense from "../../features/expense/components/AddExpense";
import AddExpenseHeader from "../../features/expense/components/AddExpenseHeader";
import HomeHeader from "../ui/HomeHeader";
import { Outlet } from "react-router";
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
  const [showForm, setShowForm] = useState(false);
  return (
    <AppLayout>
      <AppLayout.Header>
        {showForm ? (
          <AddExpenseHeader onCancel={() => setShowForm(false)} />
        ) : (
          <HomeHeader />
        )}
      </AppLayout.Header>
      {showForm ? <AddExpense /> : <Outlet />}
      <AppLayout.Footer navItems={navItems}>
        {!showForm && (
          <button
            className="bg-one text-three shadow-one/40 absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-90"
            onClick={() => setShowForm(true)}
            aria-label="Add expense"
          >
            <GoPlus className="cursor-pointer text-3xl" />
          </button>
        )}
      </AppLayout.Footer>
    </AppLayout>
  );
}
