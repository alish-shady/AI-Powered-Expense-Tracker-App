import { toast } from "sonner";

export const showMessage = (message, options) => {
  toast.info(message, {
    // className:
    //   "!bg-muted !text-card-foreground !rounded-xl !shadow-xl !p-4 !font-sans !border !border-border",
    duration: 8000,
    id: message,
    ...options,
  });
};
