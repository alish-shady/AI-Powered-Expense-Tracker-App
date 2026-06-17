import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { useState } from "react";

export default function ShowHideButton({ inputRef, setShowPassword }) {
  const [show, setShow] = useState(false);
  const toggleVisibility = () => {
    if (!inputRef.current) return;

    if (inputRef.current.type === "text") {
      inputRef.current.type = "password";
    } else {
      inputRef.current.type = "text";
    }
    setShow((c) => !c);
    setShowPassword((c) => !c);
  };

  return (
    <button
      className="absolute top-1/2 right-3.5 flex -translate-y-1/2 items-center justify-center text-text-1/40 transition-colors hover:text-one focus:outline-none"
      type="button"
      tabIndex={-1}
      onClick={toggleVisibility}
      aria-label={show ? "Hide password" : "Show password"}
    >
      {show ? (
        <HiOutlineEyeSlash className="text-xl" />
      ) : (
        <HiOutlineEye className="text-xl" />
      )}
    </button>
  );
}
