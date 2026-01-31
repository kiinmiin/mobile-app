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
});
