import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Ionicons.glyphMap; // nt "settings-outline"
  rightIcon?: keyof typeof Ionicons.glyphMap; // nt "chevron-forward"
  onPress?: () => void;
  style?: ViewStyle;
};

export function ListItem({
  title,
  subtitle,
  icon,
  rightIcon = "chevron-forward",
  onPress,
  style,
}: Props) {
  const Container: any = onPress ? Pressable : View;

  return (
    <Container onPress={onPress} style={[styles.container, style]}>
      <View style={styles.left}>
        {icon ? <Ionicons name={icon as any} size={18} color={colors.mutedText} /> : null}
      </View>

      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      <View style={styles.right}>
        {rightIcon ? <Ionicons name={rightIcon as any} size={18} color={colors.mutedText} /> : null}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  left: { width: 28, alignItems: "flex-start" },
  center: { flex: 1 },
  right: { width: 28, alignItems: "flex-end" },
  title: { fontSize: 14, fontWeight: "800", color: colors.text },
  subtitle: { marginTop: 4, fontSize: 12, fontWeight: "600", color: colors.mutedText },
});