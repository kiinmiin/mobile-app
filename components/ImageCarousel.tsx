import React, { useMemo, useState } from "react";
import { Dimensions, FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";

type Props = {
  images: string[]; // eeldame, et sisaldab vähemalt 1 pilti
  height?: number;
};

export function ImageCarousel({ images, height }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const width = useMemo(() => Dimensions.get("window").width, []);
  const imageHeight = height ?? Math.round(Dimensions.get("window").height * 0.45);

  function onScroll(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const x = e.nativeEvent.contentOffset.x;
    const idx = Math.round(x / width);
    if (idx !== activeIndex) setActiveIndex(idx);
  }

  const isMultiple = images.length > 1;

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled={isMultiple}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(uri, i) => `${uri}-${i}`}
        onScroll={isMultiple ? onScroll : undefined}
        scrollEventThrottle={16}
        scrollEnabled={isMultiple}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={{ width, height: imageHeight }} />
        )}
      />

      {isMultiple && (
        <View style={styles.dots}>
          {images.map((_, i) => (
            <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    position: "absolute",
    bottom: 14,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 999,
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.white,
  },
});