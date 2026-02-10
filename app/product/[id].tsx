import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Alert, Dimensions, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { ImageCarousel } from "../../components/ImageCarousel";
import { colors } from "../../constants/colors";
import type { Product } from "../../data/products";
import { products } from "../../data/products";

export default function productDetailsScreen() {
	const router = useRouter();
	const {id} = useLocalSearchParams<{id: string}>();

	const product: Product | undefined = useMemo(() => {
		const pid = Number(id);
		return products.find((p) => p.id === pid);
	}, [id]);

	const handleContactSeller = async () => {
		const sellerEmail = "seller@example.com";
		const subject = "Interested in your product";
		const body = "Hi! I would like to ask about the product.";
		const url = `mailto:${sellerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		const can = await Linking.canOpenURL(url);
		if (!can) {
			Alert.alert("Cannot open mail client", "Please configure an email account on your device.");
			return;
		}
		await Linking.openURL(url);
	};

	const imageHeight = useMemo(() => {
		const h = Dimensions.get("window").height;
		return Math.round(h * 0.45);
	}, []);

	if (!product) {
		return (
			<View style={styles.center}>
				<Text style={styles.notFound}>Product not found</Text>
			</View>
		);
	}

	const images = product.images?.length ? product.images : [product.image];

	return (
		<View style={styles.container}>
			<ImageCarousel images={images} />

            <Pressable onPress={() => router.back()} style={styles.backBtn} hitSlop={10}>
                <Ionicons name="chevron-back" size={22} color={colors.text}/>   
            </Pressable>

            <Pressable onPress={() => console.log("toggle favourite")} style={styles.favoriteBtn} hitSlop={10}>
                <Ionicons name="bookmark-outline" size={20} color={colors.text} />      
            </Pressable>    

			<ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
				<View style={styles.card}>
					<Text style={styles.title}>{product.title}</Text>
					<Text style={styles.price}>{product.price}</Text>

					<Text style={styles.sectionTitle}>Description</Text>
					<Text style={styles.description}>
						This is a placeholder. Can replace from prototype.
					</Text>
				</View>

				<View style={{height:120}}/>
			</ScrollView>

			<View style={styles.footer}>
				<View style={{flex: 1}}>
					<Button title="Contact Seller" onPress={handleContactSeller} />
				</View>

				<Pressable onPress={() => console.log("toggle favorite")} style={styles.footerIcon} hitSlop={10}>
					<Ionicons name="bookmark-outline" size={20} color={colors.text} />
				</Pressable>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {flex: 1, backgroundColor: colors.background},
	heroImage: {width: "100%"},
	scroll: {flex: 1, marginTop: -18},
	content: {paddingHorizontal: 16, paddingBottom: 16},
	card: {
		backgroundColor: colors.card,
		borderRadius: 24,
		padding: 16,
		borderWidth: 1,
		borderColor: colors.border,
	},
	title: {fontSize: 20, fontWeight: "800", color: colors.text},
	price: {marginTop: 10, fontSize: 16, fontWeight: "700", color: colors.text},
	sectionTitle: {marginTop: 16, fontSize: 14, fontWeight: "800", color: colors.text},
	description: {marginTop: 8, fontSize: 14, lineHeight: 20, color: colors.mutedText},
	center: {flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.background},
	notFound: {color: colors.mutedText, fontWeight: "700"},
    backBtn: {
        position: "absolute",
        top: 54,
        left: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },
    favoriteBtn: {
        position: "absolute",
        top: 54,
        right: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        position: "absolute",
        left: 16,
        right: 16,
        bottom: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 12,
        borderRadius: 20,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
    },
    footerIcon: {
        width: 48,
        height: 48,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: "center",
        justifyContent: "center",
    },
});
