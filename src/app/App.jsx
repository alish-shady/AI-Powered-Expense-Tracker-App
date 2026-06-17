import { BrowserRouter, Navigate, Route, Routes } from "react-router";
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
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route index path="/" element={<Onboarding />} />
          <Route index path="/login" element={<Login />} />
          <Route index path="/signup" element={<Signup />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <BasePageLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
