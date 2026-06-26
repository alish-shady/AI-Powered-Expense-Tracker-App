// utils/showError.ts
import { toast } from "sonner";

export const showError = (message, options) => {
  toast.error(message, {
    className:
      "!bg-destructive !text-destructive-foreground !rounded-xl !shadow-xl !p-4 !font-sans",
    duration: 5000,
    ...options,
  });
};
