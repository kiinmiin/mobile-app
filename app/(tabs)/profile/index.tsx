import { useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { ListItem } from "../../../components/ListItem";
import { colors } from "../../../constants/colors";
import { useAuth } from "../../../context/AuthContext";

export default function ProfileScreen() {
  const { signOut } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.replace("/(auth)/sign-in");
  }

  const user = { name: "User", email: "user@mail.com" };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Profile"
        rightAction="logout"
        onRightPress={handleLogout}
      />

      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <View style={styles.card}>
          <ListItem
            title="My listings"
            subtitle="Create & manage your listings"
            icon="list-outline"
            onPress={() => router.push("/(tabs)/profile/new-listing")}
          />
          <View style={styles.spacer} />
          <ListItem
            title="Settings"
            subtitle="Personal information & help center"
            icon="settings-outline"
            onPress={() => router.push("/(tabs)/profile/settings")}
          />
        </View>

        <View style={styles.bottom}>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 16, paddingTop: 14, flex: 1 },
  name: { fontSize: 20, fontWeight: "900", color: colors.text },
  email: { marginTop: 6, fontSize: 13, fontWeight: "600", color: colors.mutedText },
  card: { marginTop: 16, gap: 12 },
  spacer: { height: 0 },
  bottom: { marginTop: "auto", paddingBottom: 16 },
});