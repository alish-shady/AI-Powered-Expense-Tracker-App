import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import Onboarding from "../features/expense/pages/Onboarding";
import Login from "../features/authentication/pages/Login";
import Signup from "../features/authentication/pages/Signup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "../components/ui/ProtectedRoute";
import Home from "../features/expense/pages/Home";
import Profile from "../features/profile/pages/Profile";
import AppLayout from "../components/layout/AppLayout";
import BasePageLayout from "../components/layout/BasePageLayout";
import EditExpense from "../features/expense/pages/EditExpense";
import AddExpense from "../features/expense/pages/AddExpense";
import HomeHeader from "../components/ui/HomeHeader";
import EditExpenseHeader from "../features/expense/components/EditExpenseHeader";
import AddExpenseHeader from "../features/expense/components/AddExpenseHeader";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <BasePageLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
        handle: { header: HomeHeader },
      },
      {
        path: "expenses/:expenseId",
        element: <EditExpense />,
        handle: { header: EditExpenseHeader },
      },
      {
        path: "expenses/add",
        element: <AddExpense />,
        handle: { header: AddExpenseHeader, showButton: false },
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
