import Heading from "#components/common/Heading";
import { ButtonGroup } from "#components/ui/button-group";
import AppButton from "#components/common/AppButton";
export default function ErrorLayout({
  normalizedError,
  errorMessage,
  navigate,
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-12 p-6">
      <Heading as="h1" className="text-center">
        {normalizedError.status} {errorMessage}
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
  );
}
