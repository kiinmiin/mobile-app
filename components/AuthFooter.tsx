import { Link } from "expo-router";
import { Text, View } from "react-native";

interface AuthFooterProps {
  text?: string;
  linkText?: string;
  href?: React.ComponentProps<typeof Link>["href"];
}

export default function AuthFooter({ text = "Already have an account?", linkText = "Sign In", href = "/sign-in" as React.ComponentProps<typeof Link>["href"] }: AuthFooterProps) {
  return (
    <View style={{ marginTop: 16, alignItems: "center" }}>
      <Text style={{ fontSize: 13 }}>
        {text}{" "}
        <Link href={href} style={{ fontWeight: "700" }}>
          {linkText}
        </Link>
      </Text>
    </View>
  );
}