import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthFooter from "../../components/AuthFooter";

import AuthHeader from "../../components/AuthHeader";
import { Button } from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import GoogleLogin from "../../components/GoogleLogin";
import Input from "../../components/Input";
import Separator from "../../components/Separator";

import { styles } from "./signup.styles";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const canSubmit = email.length > 0 && password.length >= 6 && agree;

  return (
    <SafeAreaView style={styles.containter}>
      <AuthHeader title="Sign Up" onBackPress={() => router.back()} />

      <Input label="Email" placeholder="example@mail.com" value={email} onChangeText={setEmail} />
      <Input label="Password" placeholder="••••••••" value={password} onChangeText={setPassword} secure />

      <Checkbox checked={agree} onChange={setAgree} label="I agree with Terms & Conditions" />

      <Button
        title="Create account"
        onPress={() => {
          if (!canSubmit) {
            console.log("Signup validation failed", { email, password, agree });
            return;
          }
          console.log("Signup succeeded", { email, password });
          router.replace("/(tabs)/home");
        }}
        disabled={!canSubmit}
      />

      <Separator text="OR" />

      <GoogleLogin
        onSuccess={(userInfo) => {
          console.log("Google sign-in success:", userInfo);
          router.replace("/(tabs)/home");
        }}
      />
      <AuthFooter/>
    </SafeAreaView>
  );
}
