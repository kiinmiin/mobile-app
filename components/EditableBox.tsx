import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  label: string;
  value: string;
  editing: boolean;
  onChangeText?: (v: string) => void;
};

export function EditableBox({ label, value, editing, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {editing ? (
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholderTextColor={colors.mutedText}
        />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 14,
  },
  label: { fontSize: 12, fontWeight: "800", color: colors.mutedText },
  value: { marginTop: 8, fontSize: 14, fontWeight: "800", color: colors.text },
  input: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "800",
    color: colors.text,
  },
});