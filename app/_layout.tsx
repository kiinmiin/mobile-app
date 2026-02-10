import { Stack } from "expo-router";
import { useEffect } from "react";
import { initGoogleSignIn } from "../components/GoogleLogin";

export default function RootLayout() {
  useEffect(() => {
    initGoogleSignIn();
  }, []);

  return (
    <Stack screenOptions={{headerShown: true}}>
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)" options={{ headerShown: true }} />
      <Stack.Screen name="product/[id]" options={{ headerShown: true }} />
    </Stack>
  );
}
