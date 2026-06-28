export default function Heading({
  as = "h1",
  children,
  className = "",
  customStyles = false,
}) {
  const styles = {
    h1: "text-lg font-bold text-one tracking-tight",
    h2: "text-md font-semibold text-one",
    h3: "text-base font-medium text-two",
    h4: "text-sm font-medium text-text-1",
    h5: "text-xs font-semibold text-text-1",
    h6: "text-2xs font-semibold text-text-1",
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
