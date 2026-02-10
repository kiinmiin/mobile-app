import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

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
    paddingVertical: 0,
  },
  eyeButton: {
    paddingLeft: 10,
  },
  eyeIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  pickerButton: {
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: colors.card,
  },
  pickerText: {
    fontSize: 14,
    color: colors.text,
  },
  pickerPlaceholder: {
    color: colors.grey,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.card,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 16,
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.text,
  },
  modalClose: {
    fontSize: 20,
    color: colors.grey,
  },
  pickerOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  pickerOptionText: {
    fontSize: 14,
    color: colors.text,
  },
});
