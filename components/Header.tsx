import { Ionicons } from "@expo/vector-icons";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../constants/colors";

type LeftAction = "back" | "search" | "none";
type RightAction = "logout" | "none";

type Props = {
  title: string;
  leftAction?: LeftAction;
  rightAction?: RightAction;

  onLeftPress?: () => void;
  onRightPress?: () => void;

  // Search
  enableSearch?: boolean;
  keyword?: string;
  onKeywordChange?: (value: string) => void;
};

export function Header({
  title,
  leftAction = "none",
  rightAction = "none",
  onLeftPress,
  onRightPress,
  enableSearch = false,
  keyword = "",
  onKeywordChange,
}: Props) {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const leftIconName = useMemo(() => {
    if (leftAction === "back") return "chevron-back";
    if (leftAction === "search") return "search";
    return null;
  }, [leftAction]);

  const rightIconName = useMemo(() => {
    if (rightAction === "logout") return "log-out-outline";
    return null;
  }, [rightAction]);

  function handleLeft() {
    if (leftAction === "search" && enableSearch) {
      setShowSearchInput((v) => !v);
      return;
    }
    onLeftPress?.();
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.side}>
          {leftIconName ? (
            <Pressable onPress={handleLeft} hitSlop={10}>
              <Ionicons name={leftIconName as any} size={22} color={colors.text} />
            </Pressable>
          ) : (
            <View style={styles.sidePlaceholder} />
          )}
        </View>

        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>

        <View style={styles.side}>
          {rightIconName ? (
            <Pressable onPress={onRightPress} hitSlop={10}>
              <Ionicons name={rightIconName as any} size={22} color={colors.text} />
            </Pressable>
          ) : (
            <View style={styles.sidePlaceholder} />
          )}
        </View>
      </View>

      {enableSearch && showSearchInput ? (
        <View style={styles.searchRow}>
          <Ionicons name="search" size={18} color={colors.mutedText} />
          <TextInput
            value={keyword}
            onChangeText={onKeywordChange}
            placeholder="Otsi..."
            placeholderTextColor={colors.mutedText}
            style={styles.searchInput}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="search"
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  side: {
    width: 32,
    alignItems: "flex-start",
  },
  sidePlaceholder: {
    width: 22,
    height: 22,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    paddingHorizontal: 12,
  },
  searchRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
  },
});
