type Props = {
  value?: string;
  placeholder?: string;
  onChangeText?: (v: string) => void;
  keyboardType?: any;
  multiline?: boolean;
  style?: any;

  // picker variant
  type?: "text" | "picker";
  options?: string[];
  onSelectOption?: (value: string) => void;
};