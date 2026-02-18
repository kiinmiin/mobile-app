import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authStore } from "../lib/authStore";
import type { AuthResponse } from "../lib/endpoints";
import { clearToken, getToken, saveToken } from "../lib/tokenStorage";

type User = AuthResponse["user"];

type AuthState = {
  token: string | null;
  user: User | null;
  isRestoring: boolean;
  signIn: (data: AuthResponse) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isRestoring, setIsRestoring] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const stored = await getToken();
        if (stored) {
          setToken(stored);
          authStore.setToken(stored);
          // Kui sul on /me endpoint, siis lae user siit.
          // Praegu jätame user nulliks.
        }
      } finally {
        setIsRestoring(false);
      }
    })();
  }, []);

  async function signIn(data: AuthResponse) {
    setToken(data.token);
    setUser(data.user);
    authStore.setToken(data.token);
    await saveToken(data.token);
  }

  async function signOut() {
    setToken(null);
    setUser(null);
    authStore.setToken(null);
    await clearToken();
  }

  const value = useMemo<AuthState>(
    () => ({ token, user, isRestoring, signIn, signOut }),
    [token, user, isRestoring]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}