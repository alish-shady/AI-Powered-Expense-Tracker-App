import { NavLink } from "react-router";

export default function AppLayout({ children }) {
  return (
    <div className="bg-three flex h-screen w-full flex-col overflow-hidden">
      {children}
    </div>
  );
}

AppLayout.Main = function ({ children }) {
  return (
    <main className="grow overflow-y-auto px-6 py-4">
      <div className="mx-auto flex h-full max-w-lg flex-col gap-4">
        {children}
      </div>
    </main>
  );
};

AppLayout.Header = function ({ children }) {
  return (
    <header className="border-four/20 sticky top-0 z-20 flex w-full items-center justify-between border-b bg-white/50 px-6 py-4 backdrop-blur-sm">
      {children}
    </header>
  );
};

AppLayout.Footer = function ({ children, navItems }) {
  return (
    <footer className="border-four/20 relative z-30 mt-auto border-t bg-white px-8 pb-10 pt-6 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      {children}
      <nav>
        <ul className="mx-auto flex max-w-sm items-center justify-between">
          {navItems.map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-1">
              <NavLink to={item.label}>
                {({ isActive }) => (
                  <button
                    className={`cursor-pointer rounded-xl p-2 transition-all duration-200 ${
                      isActive
                        ? "bg-one/10 text-one"
                        : "text-text-1/40 hover:bg-one/5 hover:text-one"
                    }`}
                  >
                    <item.icon className="text-2xl" />
                  </button>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
