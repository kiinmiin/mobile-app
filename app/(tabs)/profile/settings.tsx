import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../../components/Button";
import { EditableBox } from "../../../components/EditableBox";
import { Header } from "../../../components/Header";
import { ListItem } from "../../../components/ListItem";
import { colors } from "../../../constants/colors";

export default function SettingsScreen() {
  const router = useRouter();
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState("User");
  const [email, setEmail] = useState("user@mail.com");

  async function openHelp() {
    const url = "https://www.google.com";
    const can = await Linking.canOpenURL(url);
    if (!can) {
      Alert.alert("Cannot open link");
      return;
    }
    await Linking.openURL(url);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Settings" leftAction="back" onLeftPress={() => router.back()} />

      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={() => setEditing((v) => !v)} hitSlop={10}>
            <Ionicons name="pencil" size={20} color={colors.mutedText} />
          </Pressable>
        </View>

        <View style={styles.boxes}>
          <EditableBox label="Name" value={name} editing={editing} onChangeText={setName} />
          <EditableBox label="Email" value={email} editing={editing} onChangeText={setEmail} />
        </View>

        {editing ? (
          <View style={styles.save}>
            <Button
              title="Save changes"
              onPress={() => {
                setEditing(false);
                console.log("saved", { name, email });
              }}
            />
          </View>
        ) : null}

        <Text style={[styles.sectionTitle, { marginTop: 22 }]}>Help Center</Text>
        <View style={styles.help}>
          <ListItem title="FAQ" icon="help-circle-outline" onPress={openHelp} />
          <View style={styles.gap} />
          <ListItem title="Contact us" icon="mail-outline" onPress={openHelp} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 16, paddingTop: 14 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: { fontSize: 14, fontWeight: "900", color: colors.text },
  boxes: { marginTop: 12, gap: 12 },
  save: { marginTop: 14 },
  help: { marginTop: 12 },
  gap: { height: 12 },
});