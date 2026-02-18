import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthFooter from "../../components/AuthFooter";
import AuthHeader from "../../components/AuthHeader";
import { Button } from "../../components/Button";
import GoogleLogin from "../../components/GoogleLogin";
import Input from "../../components/Input/index";
import Separator from "../../components/Separator";
import { useAuth } from "../../context/AuthContext";
import { getApiErrorMessage } from "../../lib/apiError";
import { login } from "../../lib/endpoints";


export default function SignInScreen() {
  const { signIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    try {
      if (!email || !password) {
        Alert.alert("Fill all fields");
        return;
      }
      const data = await login({ email, password });
      await signIn(data);
      router.replace("/(tabs)/home");
    } catch (e) {
      Alert.alert("Login failed", getApiErrorMessage(e));
    }
  }
  

  return (
    <SafeAreaView style={{ backgroundColor: colors.background, flex: 1, padding: 20, justifyContent: "center" }}>
      <AuthHeader title="Welcome back" subtitle="Sign in to continue" onBackPress={() => router.back()}/>

      <View style={{ marginTop: 24, gap: 12 }}>
        <Input label="Email" placeholder="example@mail.com" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <Input label="Password" placeholder="••••••••" value={password} onChangeText={setPassword} secure />
      </View>

      <View style={{ marginTop: 16, gap: 12 }}>
        <Button
          title="Sign In"
          onPress={() => {
            if (!email || password.length < 6) {
              console.log("Sign in validation failed", { email, passwordLength: password.length });
              return;
            }
            console.log("Sign in succeeded", { email });
            router.replace("/(tabs)/home");
          }}
        />
            <Separator text="OR" />
        <GoogleLogin
          onSuccess={(userInfo) => {
            console.log("Google sign-in success:", userInfo);
            router.replace("/(tabs)/home");
          }}
        />
      </View>

      <AuthFooter text="Don't have an account?" linkText="Sign Up" href="/signup" />
    </SafeAreaView>
  );
}