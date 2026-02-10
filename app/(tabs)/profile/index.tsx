import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import { ListItem } from "../../../components/ListItem";
import { colors } from "../../../constants/colors";

export default function ProfileScreen() {
  const router = useRouter();

  const user = { name: "User", email: "user@mail.com" };

  return (
    <View style={styles.container}>
      <Header
        title="Profile"
        rightAction="logout"
        onRightPress={() => console.log("logout")}
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
          <Button title="Logout" onPress={() => console.log("logout")} />
        </View>
      </View>
    </View>
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