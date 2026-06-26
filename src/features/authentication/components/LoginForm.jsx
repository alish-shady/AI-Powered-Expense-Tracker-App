import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/AppButton";
import { useLogin } from "../hooks/useLogin";
import { showError } from "@/utils/showError";
import { getErrorMessage, normalizeError } from "#lib/utils";
export default function LoginForm() {
  const { login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    login(data, {
      onSuccess: () => reset(),
      onError: (err) => {
        const error = normalizeError(err);
        const errorMessage = getErrorMessage(error, {
          invalid_credentials: "The email or password is incorrect.",
        });
        showError(errorMessage);
      },
    });
  }

  return (
    <form
      noValidate
      className={`mt-6 flex flex-col gap-6 ${isPending ? "animate-custom-pulse" : ""}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          label="email"
          autoComplete="email"
          disabled={isPending}
          error={errors.email}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
        <Input
          type="password"
          label="password"
          autoComplete="current-password"
          disabled={isPending}
          error={errors.password}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          disabled={isPending}
          size="xs"
          className="bg-one py-5"
        >
          {isPending ? "Signing In..." : "Sign In"}
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="border-four w-full border-t"></span>
          </div>
          <div className="text-2xs relative flex justify-center uppercase">
            <span className="bg-three text-text-1/50 px-2">
              Or continue with
            </span>
          </div>
        </div>

        <Button
          type="button"
          size="xs"
          className="border-four active:scale-98 text-text-1/75 flex items-center justify-center gap-3 rounded-full border bg-white py-5 font-medium transition-all hover:bg-gray-50"
        >
          <FcGoogle />
          Google
        </Button>
      </div>

      <p className="text-text-1/70 text-center text-xs">
        Don't have an account?{" "}
        <Link className="text-one font-semibold hover:underline" to="/signup">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
