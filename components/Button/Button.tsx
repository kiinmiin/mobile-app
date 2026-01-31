import React from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
	title: string;
	onPress?: () => void;
	style?: ViewStyle;
	disabled?: boolean;
};

export function Button({ title, onPress, style, disabled }: Props) {
	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			hitSlop={10}
			style={({ pressed }) => [
			styles.container,
			pressed && styles.pressed,
			disabled && styles.disabled,
			style,
			]}
		>
			<Text style={styles.title}>{title}</Text>
		</Pressable>
	);
}
