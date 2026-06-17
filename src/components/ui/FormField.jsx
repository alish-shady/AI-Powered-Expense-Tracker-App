export default function FormField({ label, error, children, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={label}
          className="text-sm font-medium text-text-1/70"
        >
          {label.at(0).toUpperCase() + label.slice(1)}
        </label>
      )}
      <div className="relative">{children}</div>
      {error && (
        <span className="text-xs font-semibold text-error animate-in fade-in slide-in-from-top-1">
          {error?.type === "required"
            ? "This field is required"
            : error.message || error}
        </span>
      )}
    </div>
  );
}
