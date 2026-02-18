import { api } from "./api";

export type RegisterPayload = { fullName: string; email: string; password: string };
export type LoginPayload = { email: string; password: string };

export type AuthResponse = {
  token: string;
  user: { id: number; fullName: string; email: string };
};

export async function register(payload: RegisterPayload) {
  // näide: /user/register (kohanda vastavalt oma BE-le)
  const { data } = await api.post<AuthResponse>("/user/register", payload);
  return data;
}

export async function login(payload: LoginPayload) {
  const { data } = await api.post<AuthResponse>("/user/login", payload);
  return data;
}