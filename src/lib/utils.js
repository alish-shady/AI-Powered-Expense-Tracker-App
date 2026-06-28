import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

class AppError extends Error {
  constructor(message, code, status) {
    super(message);
    this.code = code;
    this.status = status;
  }
}

export function normalizeError(err) {
  const isNetworkError =
    err?.message.includes("Failed to fetch") ||
    err?.message.includes("NetworkError") ||
    err?.message.includes("Load failed") ||
    navigator.onLine === false;
  if (isNetworkError)
    return new AppError(err.message, "network_error", err.status);
  if (err?.message) {
    return new AppError(err.message, err.code, err.status);
  }
  return new AppError("Unknown error occurred", "unknown_error");
}

const DEFAULT_ERROR_MESSAGES = {
  invalid_credentials: "Email or password is incorrect.",
  email_not_confirmed: "Please confirm your email before signing in.",
  user_already_exists: "An account with this email already exists.",
  validation_error: "Please check your input and try again.",
  network_error: "Please check your network connection and try again.",
  unknown_error: "Something went wrong. Please try again.",
};

const STATUS_ERROR_MESSAGES = {
  400: "Please check your input and try again.",
  401: "You need to sign in to continue.",
  403: "You do not have permission to do this.",
  404: "The requested resource was not found.",
  409: "This action conflicts with existing data.",
  429: "Too many requests. Please wait a moment and try again.",
  500: "Something went wrong on our side. Please try again later.",
};

export function getErrorMessage(error, customMessages = {}) {
  const messages = {
    ...DEFAULT_ERROR_MESSAGES,
    ...customMessages,
  };

  if (error.code && messages[error.code]) {
    return messages[error.code];
  }

  if (error.status && STATUS_ERROR_MESSAGES[error.status]) {
    return STATUS_ERROR_MESSAGES[error.status];
  }

  return DEFAULT_ERROR_MESSAGES.unknown_error;
}
