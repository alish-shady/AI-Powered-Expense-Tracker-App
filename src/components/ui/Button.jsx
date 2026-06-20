export default function Button({
  children,
  variant = "filled",
  size = "md",
  type = "submit",
  className = "",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-one/50 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    filled: "bg-one text-white hover:bg-one/90 active:scale-98",
    outline: "border-2 border-one text-one hover:bg-one/10 active:scale-98",
    ghost: "text-one hover:bg-one/10",
    none: "",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} w-full`;

  return (
    <button type={type} className={buttonStyles} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
