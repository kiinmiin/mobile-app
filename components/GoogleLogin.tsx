import Constants from "expo-constants";
import React from "react";
import { Image, Platform, Pressable, Text } from "react-native";

let GoogleSignin: any | undefined;

export function initGoogleSignIn() {
  try {
    if (Constants.appOwnership === "expo" && Platform.OS !== "web") {
      console.warn("Running inside Expo Go; RNGoogleSignin native module not available. Skipping configure.");
      return;
    }

    const mod = require("@react-native-google-signin/google-signin");
    const GS = mod?.GoogleSignin ?? mod?.default?.GoogleSignin ?? mod?.default ?? mod;

    if (!GS) {
      console.warn("GoogleSignin module was required but exports are missing.");
      return;
    }

    GoogleSignin = GS;
    if (typeof GoogleSignin.configure === "function") {
      GoogleSignin.configure({
        webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID,
        // iOS: webClientId on ka vajalik, kui soovid idToken'it
        offlineAccess: false,
      });
    }
  } catch (e) {
    console.warn("GoogleSignin native module not available during init:", e);
  }
}

export default function GoogleLogin({ onSuccess }: { onSuccess: (result: any) => void }) {
  const handlePress = async () => {
    try {

      if (Constants.appOwnership === "expo" && Platform.OS !== "web") {
        console.log("Logged in via google");
        onSuccess({ email: "demo@example.com", name: "Demo User" });
        return;
      }

      if (!GoogleSignin) {
        const mod = require("@react-native-google-signin/google-signin");
        const GS = mod?.GoogleSignin ?? mod?.default?.GoogleSignin ?? mod?.default ?? mod;
        GoogleSignin = GS;
      }

      if (Platform.OS !== "web") {
        try {
          if (GoogleSignin && typeof GoogleSignin.hasPlayServices === "function") {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
          }
        } catch (e) {
          console.warn("Play services check failed:", e);
        }
      }

      if (!GoogleSignin || typeof GoogleSignin.signIn !== "function") {
        console.warn("GoogleSignin.signIn is not available.");
        return;
      }

      const userInfo = await GoogleSignin.signIn();
      onSuccess(userInfo);
    } catch (e) {
      console.warn("Google sign-in failed or native module missing:", e);
      // You can add a web fallback here (expo-auth-session) or show a message to the user.
    }
  };

  return (
    <Pressable onPress={handlePress} style={{ backgroundColor: "#3F4A59", height: 48, borderRadius: 12, paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center", borderWidth: 1 }}>
      <Image source={require("../assets/images/google.png")} style={{ width: 18, height: 18, marginRight: 10 }} />
      <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>Google</Text>
    </Pressable>
  );
}