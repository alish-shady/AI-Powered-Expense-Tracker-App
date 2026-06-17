export default function Heading({ as = "h1", children, className = "" }) {
  const styles = {
    h1: "text-3xl font-bold text-one tracking-tight",
    h2: "text-2xl font-semibold text-one",
    h3: "text-xl font-medium text-two",
    h4: "text-lg font-medium text-text-1",
    h5: "text-base font-semibold text-text-1",
    h6: "text-sm font-semibold text-text-1",
  };

  const Component = as;

  return (
    <Component className={`${styles[as] || styles.h1} ${className}`}>
      {children}
    </Component>
  );
}
