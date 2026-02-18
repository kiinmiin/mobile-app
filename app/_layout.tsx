import { AuthProvider } from "@/context/AuthContext";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { initGoogleSignIn } from "../components/GoogleLogin";

export default function RootLayout() {
  useEffect(() => {
    initGoogleSignIn();
  }, []);

  return (
    <AuthProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="product/[id]" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
