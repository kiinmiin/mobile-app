import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  subtitle?: string;
  onBackPress?: () => void;
};

export default function AuthHeader({ title, subtitle, onBackPress }: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onBackPress}
        hitSlop={10}
        disabled={!onBackPress}
        style={styles.backButton}
        accessibilityRole="button"
        accessibilityLabel="Tagasi"
      >
        <Image source={require("../../assets/images/auth_back.png")} style={styles.backIcon} />
      </Pressable>

      <View style={{ marginLeft: 8 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}
