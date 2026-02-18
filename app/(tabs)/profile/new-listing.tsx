import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Button } from "../../../components/Button";
import { Header } from "../../../components/Header";
import Input from "../../../components/Input/index";
import { colors } from "../../../constants/colors";
import { categories } from "../../../data/categories";

type PickedImage = { uri: string; name: string };

export default function NewListingScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [images, setImages] = useState<PickedImage[]>([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    categoryTitle: "Select category",
  });

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "Please allow access to your photos.");
      return;
    }

    setLoading(true);
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
        allowsMultipleSelection: true,
        selectionLimit: 6,
      });

      if (result.canceled) return;

      const picked = result.assets.map((a) => ({
        uri: a.uri,
        name: a.fileName ?? `image-${Date.now()}-${Math.random()}`,
      }));

      setImages((prev) => [...prev, ...picked]);
    } finally {
      setLoading(false);
    }
  }

  function removeImage(name: string) {
    setImages((prev) => prev.filter((img) => img.name !== name));
  }

  const categoryOptions = useMemo(
    () => categories.filter((c) => !!c.id).map((c) => c.title),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="New Listing" leftAction="back" onLeftPress={() => router.back()} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>Photos</Text>

          <View style={styles.photoRow}>
            <Pressable onPress={pickImage} style={styles.addBox} hitSlop={10}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Ionicons name="add" size={26} color={colors.mutedText} />
              )}
            </Pressable>

            {images.map((img) => (
              <View key={img.name} style={styles.photoWrap}>
                <Image source={{ uri: img.uri }} style={styles.photo} />
                <Pressable
                  onPress={() => removeImage(img.name)}
                  style={styles.remove}
                  hitSlop={10}
                >
                  <Ionicons name="close" size={16} color={colors.mutedText} />
                </Pressable>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 18 }]}>Details</Text>

          <View style={styles.form}>
            <Input
              placeholder="Title"
              value={form.title}
              onChangeText={(v: string) => updateField("title", v)}
            />

            <Input
              placeholder="Price"
              value={form.price}
              onChangeText={(v: string) => updateField("price", v)}
              keyboardType="numeric"
            />

            {/* Kui sinu Input toetab picker tüüpi, kasuta seda.
                Muidu asenda lihtsa Pressable + modal lahendusega. */}
            <Input
              type="picker"
              placeholder="Select category"
              value={form.categoryTitle}
              options={categoryOptions}
              onSelectOption={(v: string) => updateField("categoryTitle", v)}
            />

            <Input
              placeholder="Description"
              value={form.description}
              onChangeText={(v: string) => updateField("description", v)}
              multiline
              style={{ height: 110, textAlignVertical: "top" }}
            />
          </View>

          <View style={styles.submit}>
            <Button
              title="Create listing"
              onPress={() => {
                console.log("create listing", { form, images });
                router.back();
              }}
            />
          </View>

          <View style={{ height: 24 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 16, paddingTop: 14 },
  sectionTitle: { fontSize: 14, fontWeight: "900", color: colors.text },
  photoRow: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "flex-start",
  },
  addBox: {
    width: 74,
    height: 74,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
  },
  photoWrap: { width: 74, height: 74 },
  photo: {
    width: 74,
    height: 74,
    borderRadius: 18,
    backgroundColor: colors.border,
  },
  remove: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    alignItems: "center",
    justifyContent: "center",
  },
  form: { marginTop: 12, gap: 12 },
  submit: { marginTop: 16 },
});