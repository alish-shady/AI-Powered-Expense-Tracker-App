import { useNavigate } from "react-router";
import { signoutAPI } from "../../../services/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export function useSignout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signout, isPending } = useMutation({
    mutationFn: signoutAPI,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries(["user"]);
    },
  });

  return { signout, isPending };
}
