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
  const selected = watch(name);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const baseStyles =
    "w-full cursor-pointer rounded-xl border border-four bg-white px-4 py-2.5 text-sm transition-all duration-200 focus:border-one focus:outline-none focus:ring-2 focus:ring-one/20";

  const selectedLabel = selected || "Select an option";
  function handleSelect(option) {
    setValue(name, option, { shouldDirty: true });
    setOpen(false);
  }

  return (
    <FormField label={label} error={error}>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((p) => !p)}
          ref={ref}
          className={`${baseStyles} flex items-center justify-between ${className}`}
          {...props}
        >
          <span className={value || selected ? "" : "text-gray-400"}>
            {selectedLabel}
          </span>

          <span className="text-one ml-2">
            <IoChevronDownOutline
              className={`duration-200 ${open ? "rotate-180" : "rotate-0"}`}
            />
          </span>
        </button>

        <div
          className={`border-four absolute z-50 mt-2 w-full origin-top rounded-xl border bg-white shadow-lg transition-all duration-200 ${open ? "translate-0 pointer-events-auto opacity-100" : "pointer-events-none -translate-y-4 opacity-0"}`}
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => handleSelect(opt)}
              className="hover:bg-four/10 hover:text-one w-full cursor-pointer px-4 py-2 text-left text-sm"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </FormField>
  );
});

export default Select;
