import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: colors.blue,
		paddingVertical: 20,
		paddingHorizontal: 8,
		borderRadius: 8,
		alignItems: "center",
	},
	title: {
		color: colors.white,
		textAlign: "center",
		fontSize: 16,
		fontWeight: "700",
	},
	pressed: {
		opacity: 0.7,
	},
	disabled: {
		opacity: 0.4,
},
});

