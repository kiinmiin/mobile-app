import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  },
  pressed: {
    opacity: 0.75,
  },
  box: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: colors.grey,
    alignItems: "center",
    justifyContent: "center",
  },
  boxChecked: {
    backgroundColor: colors.primary,
  },
  checkIcon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
  },
  label: {
    marginLeft: 10,
    fontSize: 13,
    color: colors.text,
    fontWeight: "600",
  },
});
