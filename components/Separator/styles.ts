import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.line,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 12,
    color: colors.grey,
    fontWeight: "600",
  },
});