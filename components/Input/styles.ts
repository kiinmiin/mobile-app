import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 6,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    paddingVertical: 0, // Android: hoiab kõrguse kontrolli all
  },
  eyeButton: {
    paddingLeft: 10,
  },
  eyeIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});
