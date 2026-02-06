import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { tokenCache } from "@/utils/cache";
import { StatusBar } from "react-native";
import { passkeys } from "@clerk/expo-passkeys";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
  }

  return (
    <ClerkProvider
      publishableKey={publishableKey}
      tokenCache={tokenCache}
      __experimental_passkeys={passkeys}
    >
      <ClerkLoaded>
        <ThemeProvider value={DarkTheme}>
          <Slot />
          <StatusBar barStyle="light-content" backgroundColor={"black"} />
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}