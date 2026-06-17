export default function Logo({ className = "", size = "md" }) {
  const sizes = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto",
    lg: "h-20 w-auto",
    xl: "h-32 w-auto",
  };

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-one to-two blur-sm opacity-25"></div>
        <img 
          src="/Logo.png" 
          alt="AI Expense Tracker Logo" 
          className={`relative ${sizes[size]} object-contain drop-shadow-sm`} 
        />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold tracking-tight text-one">
          Fin<span className="text-two">Track</span>
        </span>
        <div className="h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-one/30 to-transparent"></div>
      </div>
    </div>
  );
}
