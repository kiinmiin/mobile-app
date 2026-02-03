import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  checked: boolean;
  onChange: (next: boolean) => void;
  label?: string;
};

export default function Checkbox({ checked, onChange, label }: Props) {
  return (
    <Pressable
      onPress={() => onChange(!checked)}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      hitSlop={6}
    >
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked ? (
          <Image
            source={require("../../assets/images/checkbox_check.png")}
            style={styles.checkIcon}
          />
        ) : null}
      </View>

      {label ? <Text style={styles.label}>{label}</Text> : null}
    </Pressable>
  );
}
