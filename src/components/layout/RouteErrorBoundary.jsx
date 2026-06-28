import Heading from "#components/common/Heading";
import { getErrorMessage, normalizeError } from "#lib/utils";
import { useNavigate, useRouteError } from "react-router";
import AppPageShell from "./AppPageShell";
import AppButton from "#components/common/AppButton";
import { ButtonGroup } from "#components/ui/button-group";
function Header() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Heading
        as="h2"
        className="text-destructive font-semibold tracking-tight"
      >
        An error happened
      </Heading>
    </div>
  );
}
export default function RouteErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const normalizedError = normalizeError(error);
  const errorMessage = getErrorMessage(normalizedError);
  return (
    <AppPageShell Header={Header}>
      <div className="flex h-full flex-col items-center justify-center gap-12 p-6">
        <Heading as="h1" className="text-center">
          {errorMessage}
        </Heading>
        <ButtonGroup orientation="horizontal" className="w-full">
          <AppButton
            variant="destructive"
            size="sm"
            className="flex-1"
            onClick={() => window.location.reload()}
          >
            try again
          </AppButton>
          <AppButton
            variant="ghost"
            size="sm"
            className="flex-1"
            onClick={() => navigate("/app/home", { replace: true })}
          >
            go home
          </AppButton>
        </ButtonGroup>
      </div>
    </AppPageShell>
  );
}
