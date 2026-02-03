import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
	},
	image: {
		width: "100%",
		height: 200,
	},
	titleContainer: {
		marginVertical: 54,
	},
	title: {
		fontSize: 40,
		fontWeight: "700",
		textAlign: "center",
		color: colors.black,
	},
	innerTitle: {
		color: colors.orange,
		textDecorationLine: "underline",
	},
	footerText: {
		color: colors.blue,
		textAlign: "center",
		fontSize: 16,
		fontWeight: "700",
		marginTop: 30,
	},
	submitButton: {
		marginTop: 16,
	},
});

// Expo router requires a default export for files in the app/ routes.
// Provide a no-op default component so this file can remain a styles module.
export default function _stylesPlaceholder() {
	return null;
}
