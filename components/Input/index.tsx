import React, { useMemo, useState } from "react";
import { FlatList, Image, Modal, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

type Props = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  secure?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  keyboardType?: any;
  multiline?: boolean;
  style?: any;
  type?: "text" | "picker";
  options?: string[];
  onSelectOption?: (value: string) => void;
};

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  secure,
  autoCapitalize = "none",
  keyboardType = "default",
  multiline = false,
  style,
  type = "text",
  options = [],
  onSelectOption,
}: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);

  const showEye = !!secure;
  const secureTextEntry = secure ? !isPasswordVisible : false;

  const eyeSource = useMemo(() => {
    if (!showEye) return null;
    return isPasswordVisible
      ? require("../../assets/images/eye.png")
      : require("../../assets/images/eye_closed.png");
  }, [showEye, isPasswordVisible]);

  if (type === "picker") {
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <Pressable
          onPress={() => setPickerOpen(true)}
          style={[styles.pickerButton, style]}
        >
          <Text style={[styles.pickerText, value === "Select category" && styles.pickerPlaceholder]}>
            {value}
          </Text>
        </Pressable>

        <Modal visible={pickerOpen} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select option</Text>
                <Pressable onPress={() => setPickerOpen(false)} hitSlop={10}>
                  <Text style={styles.modalClose}>✕</Text>
                </Pressable>
              </View>

              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Pressable
                    style={styles.pickerOption}
                    onPress={() => {
                      onSelectOption?.(item);
                      setPickerOpen(false);
                    }}
                  >
                    <Text style={styles.pickerOptionText}>{item}</Text>
                  </Pressable>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputRow}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8D9BB5"
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          style={[styles.input, style]}
        />

        {showEye && (
          <Pressable
            onPress={() => setIsPasswordVisible((v) => !v)}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Näita või peida parool"
            style={styles.eyeButton}
          >
            <Image source={eyeSource!} style={styles.eyeIcon} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
