import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	containter: {
		flex: 1,
		backgroundColor: colors.background,
		paddingHorizontal: 24,
		paddingTop: 18,
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
