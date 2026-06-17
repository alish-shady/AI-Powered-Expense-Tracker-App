import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signupAPI } from "../../../services/apiAuth";
export function useSignup() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupAPI,
    onSuccess: (data) => {
      navigate("/app", { replace: true });
      queryClient.setQueryData(["user"], data.user);
    },
  });

  return { signup, isPending };
}
