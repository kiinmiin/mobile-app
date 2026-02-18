import type { AxiosError } from "axios";

export function getApiErrorMessage(err: unknown): string {
  const e = err as AxiosError<any>;
  const message =
    e?.response?.data?.message ||
    e?.response?.data?.error ||
    e?.message ||
    "Unknown error";
  return message;
}