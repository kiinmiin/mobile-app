import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { styles } from "./splash.styles";

export default function Splash() {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/splash_image.png")}
				style={styles.image}
				resizeMode="contain"
			/>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>You'll Find</Text>
				<Text style={[styles.title, styles.innerTitle]}>All you need</Text>
				<Text style={styles.title}>Here!</Text>
			</View>
			<Button title="Sign Up" onPress={() => router.push("/signup")} />
			<Pressable hitSlop={10} onPress={() => router.push("/sign-in")}>
				<Text style={styles.footerText}>Sign In</Text>
			</Pressable>
		</View>
	);
}
