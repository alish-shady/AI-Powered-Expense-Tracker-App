export default function AppLayout({ children }) {
  return (
    <div className="bg-background text-foreground flex h-screen w-full flex-col overflow-hidden">
      {children}
    </div>
  );
}

AppLayout.Main = function ({ children }) {
  return (
    <main className="w-full grow overflow-y-auto px-6 pt-4">
      <div className="mx-auto flex h-full flex-col gap-4 xl:w-full">
        {children}
      </div>
    </main>
  );
};

AppLayout.Header = function ({ children }) {
  return (
    <header className="border-border/20 bg-background/50 sticky top-0 z-20 flex w-full items-center justify-between border-b px-6 py-4 backdrop-blur-sm">
      {children}
    </header>
  );
};

AppLayout.Footer = function ({ children }) {
  return (
    <footer className="border-border/20 bg-card relative z-30 mt-auto border-t px-8 pb-10 pt-6 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
      {children}
    </footer>
  );
};
