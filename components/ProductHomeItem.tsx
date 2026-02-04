import React, { useMemo } from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";
import type { Product } from "../data/products";

type Props = {
  item: Product;
  onPress?: () => void;
};

export function ProductHomeItem({ item, onPress }: Props) {
  const width = useMemo(() => {
    const screen = Dimensions.get("window").width;
    const horizontalPadding = 16 * 2;
    const gap = 12;
    return (screen - horizontalPadding - gap) / 2;
  }, []);

  return (
    <Pressable onPress={onPress} style={[styles.container, { width }]}>
      <Image source={{ uri: item.image }} style={[styles.image, { width, height: width }]} />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    borderRadius: 16,
    backgroundColor: colors.border,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.text,
  },
  price: {
    marginTop: 4,
    fontSize: 13,
    color: colors.mutedText,
    fontWeight: "600",
  },
});