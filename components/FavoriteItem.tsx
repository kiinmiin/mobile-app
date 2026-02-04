import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import type { Product } from "../data/products";

type Props = {
  item: Product;
  onRemove?: () => void;
};

export function FavoriteItem({ item, onRemove }: Props) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Pressable onPress={onRemove} hitSlop={10} style={styles.removeBtn}>
        <Ionicons name="close" size={20} color={colors.mutedText} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 14,
    backgroundColor: colors.border,
  },
  center: {
    flex: 1,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },
  price: {
    marginTop: 6,
    fontSize: 13,
    color: colors.mutedText,
    fontWeight: "600",
  },
  removeBtn: {
    paddingLeft: 8,
    paddingVertical: 8,
  },
});