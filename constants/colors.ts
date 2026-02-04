export const colors = {
    primary: "#1E5EFF",
    text: "#0B1220",
    background: "#FFFFFF",
    grey: "#8D9BB5",
    muted: "#7A869A",
    line: "#E6EAF2",
    danger: "#E5484D",
    white: "#FFFFFF",
    black: "#000000",
    orange: "#FFA500",
    blue: "#0000FF",
    mutedText: "#6B7280",
    card: "#FFFFFF",
    border: "#E5E7EB",
  } as const;
  
  export type ColorName = keyof typeof colors;