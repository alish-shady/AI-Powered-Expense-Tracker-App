import Heading from "../../../components/ui/Heading";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <main className="bg-three relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-8">
      {/* Background decoration */}
      <div className="bg-one/5 pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"></div>
      <div className="bg-two/10 pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full blur-3xl"></div>

      <img
        src="/Logo.png"
        alt="Background Logo"
        className="pointer-events-none absolute inset-0 m-auto h-2/3 w-2/3 select-none object-contain opacity-[0.03]"
      />

      <div className="relative z-10 w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <Heading as="h1" className="mb-2">
            Welcome Back!
          </Heading>
          <p className="text-text-1/60 font-medium">
            Please sign in to your account
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
