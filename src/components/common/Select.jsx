import { forwardRef, useRef, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

import FormField from "./FormField";

const Select = forwardRef(function Select(
  {
    options = [],
    label = "Name",
    name,
    setValue,
    watch,
    error,
    className = "",
    value,
    ...props
  },
  ref,
) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const watchedValue = watch?.(name);
  const selected = value ?? watchedValue;
  const hasSelection = selected !== undefined && selected !== "";

  const baseStyles = [
    "w-full cursor-pointer rounded-xl border border-input",
    "bg-background text-foreground",
    "px-4 py-3 text-xs",
    "transition-[color,box-shadow] duration-200",
    "outline-none",
    "focus-visible:border-ring",
    "focus-visible:ring-2 focus-visible:ring-ring/30",
    "disabled:cursor-not-allowed",
    "disabled:bg-muted disabled:text-muted-foreground",
    "disabled:opacity-50",
    "aria-invalid:border-destructive",
    "aria-invalid:ring-2 aria-invalid:ring-destructive/20",
  ].join(" ");

  const selectedLabel = hasSelection ? selected : "Select an option";

  function handleSelect(option) {
    setValue?.(name, option, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });

    setOpen(false);
  }

  return (
    <FormField label={label} error={error}>
      <div ref={containerRef} className="relative">
        <button
          {...props}
          ref={ref}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-invalid={Boolean(error)}
          onClick={() => setOpen((current) => !current)}
          className={`${baseStyles} flex items-center justify-between gap-2 ${className}`}
        >
          <span
            className={
              hasSelection
                ? "text-foreground truncate"
                : "text-muted-foreground truncate"
            }
          >
            {selectedLabel}
          </span>

          <IoChevronDownOutline
            aria-hidden="true"
            className={`text-muted-foreground shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        <div
          role="listbox"
          aria-label={label}
          className={[
            "absolute z-50 mt-2 w-full origin-top",
            "border-border max-h-60 overflow-y-auto rounded-xl border",
            "bg-popover text-popover-foreground shadow-lg",
            "transition-all duration-200",
            open
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          ].join(" ")}
        >
          {options.map((option) => {
            const isSelected = option === selected;

            return (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option)}
                className={[
                  "w-full cursor-pointer px-4 py-3 text-left text-xs",
                  "transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:bg-accent",
                  "focus-visible:text-accent-foreground",
                  "focus-visible:outline-none",
                  isSelected
                    ? "bg-accent text-accent-foreground"
                    : "text-popover-foreground",
                ].join(" ")}
              >
                {option}
              </button>
            );
          })}

          {options.length === 0 && (
            <div className="text-muted-foreground px-4 py-3 text-xs">
              No options available
            </div>
          )}
        </div>
      </div>
    </FormField>
  );
});

export default Select;
