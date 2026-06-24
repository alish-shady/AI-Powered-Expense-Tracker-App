import { forwardRef, useRef, useState } from "react";
import ShowHideButton from "./ShowHideButton";
import FormField from "./FormField";

const Input = forwardRef(function Input(
  {
    type = "text",
    label = "Name",
    value,
    error,
    onChange,
    setter,
    className = "",
    ...props
  },
  ref,
) {
  const inputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const isTextarea = type === "textarea";
  const inputType = isPassword && showPassword ? "text" : type;
  const baseStyles =
    "w-full rounded-xl border border-four bg-white px-4 py-3 text-xs transition-all duration-200 focus:border-one focus:outline-none focus:ring-2 focus:ring-one/20 disabled:opacity-50 disabled:bg-gray-50";

  const handleChange = (e) => {
    onChange?.(e);
    setter?.(e.target.value);
  };

  const setRefs = (node) => {
    inputRef.current = node;
    if (ref) {
      typeof ref === "function" ? ref(node) : (ref.current = node);
    }
  };

  const commonProps = {
    id: label,
    value,
    onChange: handleChange,
    ref: setRefs,
    className: `${baseStyles} ${className}`,
    ...props,
  };
  return (
    <FormField label={label} error={error}>
      {isTextarea ? (
        <textarea
          {...commonProps}
          rows={5}
          className={`${commonProps.className} resize-none`}
        />
      ) : (
        <input {...commonProps} type={inputType} />
      )}

      {isPassword && (
        <ShowHideButton inputRef={inputRef} setShowPassword={setShowPassword} />
      )}
    </FormField>
  );
});

export default Input;
