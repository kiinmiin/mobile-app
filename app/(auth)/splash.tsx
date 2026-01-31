import React from "react";
import { Image, Text, View } from "react-native";
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
{/* Nupud lisame töölehe 2 käigus */}
</View>
);
}