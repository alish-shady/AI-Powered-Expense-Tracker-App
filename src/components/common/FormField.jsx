export default function FormField({ label, error, children, className = "" }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={label} className="text-text-1/70 text-xs font-medium">
          {label.at(0).toUpperCase() + label.slice(1)}
        </label>
      )}
      <div className="relative">{children}</div>
      {error && (
        <span className="text-error animate-in fade-in slide-in-from-top-1 text-xs font-semibold">
          {error?.type === "required"
            ? "This field is required"
            : error.message || error}
        </span>
      )}
    </div>
  );
}
