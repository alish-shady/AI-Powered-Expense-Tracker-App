export default function Heading({
  as = "h1",
  children,
  className = "",
  customStyles = false,
}) {
  const styles = {
    h1: "text-lg font-bold text-primary tracking-tight",
    h2: "text-md font-semibold text-primary",
    h3: "text-base font-medium text-secondary",
    h4: "text-sm font-medium text-primary-foreground",
    h5: "text-xs font-semibold text-primary-foreground",
    h6: "text-2xs font-semibold text-primary-foreground",
  };

  const Component = as;

  return (
    <Component
      className={`${customStyles || styles[as] || styles.h1} ${className}`}
    >
      {children}
    </Component>
  );
}
