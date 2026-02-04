import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";
import type { Category } from "../data/categories";

type Props = {
  item: Category;
  selected?: boolean;
  onPress?: () => void;
};

export function CategoryBox({ item, selected = false, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.container, selected && styles.selected]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={[styles.title, selected && styles.selectedTitle]} numberOfLines={1}>
        {item.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 90,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 14,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 12,
  },
  selected: {
    borderColor: colors.primary,
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginBottom: 8,
  },
  title: {
    fontSize: 12,
    color: colors.mutedText,
    fontWeight: "600",
  },
  selectedTitle: {
    color: colors.text,
  },
});