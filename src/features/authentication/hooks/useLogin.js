import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAPI } from "../../../services/apiAuth";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending,
    error,
    isError,
  } = useMutation({
    mutationFn: loginAPI,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      navigate("/app", { replace: true });
    },
  });

  return { login, isPending };
}
