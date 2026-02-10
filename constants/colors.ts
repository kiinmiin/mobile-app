export const colors = {
    primary: "#1E5EFF",
    text: "#0B1220",
    background: "#FFFFFF",
    grey: "#8D9BB5",
    muted: "#7A869A",
    line: "#E6EAF2",
    danger: "#DC2626",
    white: "#FFFFFF",
    black: "#000000",
    orange: "#FFA500",
    blue: "#4F63AC",
    mutedText: "#6B7280",
    card: "#FFFFFF",
    border: "#E5E7EB",
  } as const;
  
  export type ColorName = keyof typeof colors;