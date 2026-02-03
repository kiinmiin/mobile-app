import { Stack } from "expo-router";
import { useEffect } from "react";
import { initGoogleSignIn } from "../components/GoogleLogin";

export default function RootLayout() {
  useEffect(() => {
    initGoogleSignIn();
  }, []);

  return <Stack />;
}
