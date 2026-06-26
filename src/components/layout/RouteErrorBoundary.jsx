import { getErrorMessage, normalizeError } from "#lib/utils";
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function RouteErrorBoundary() {
  const error = useRouteError();
  console.log({ errorInBound: error });
  // Handle Response errors (thrown with json() or new Response())
  if (isRouteErrorResponse(error)) {
    const normalized = normalizeError(error);
    const message = getErrorMessage(normalized);
    console.error("Route error:", error);
    return (
      <div role="alert">
        <h2>Oops! Something went wrong.</h2>
        <p>{message}</p>
        {error.status === 404 && (
          <p>The page you're looking for doesn't exist.</p>
        )}
        {/* Optionally show extra fields from error.data */}
      </div>
    );
  }

  // Handle regular JavaScript Errors
  if (error instanceof Error) {
    console.error("Uncaught error:", error);
    return (
      <div role="alert">
        <h2>Unexpected Error</h2>
        <p>{error.message}</p>
        {import.meta.env.DEV && (
          <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
        )}
      </div>
    );
  }

  // Fallback for anything else (e.g., thrown string)
  console.error("Unknown error type:", error);
  return (
    <div role="alert">
      <h2>Something went wrong</h2>
      <p>{String(error)}</p>
    </div>
  );
}
