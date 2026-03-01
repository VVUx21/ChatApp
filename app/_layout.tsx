import { tokenCache } from "@/utils/cache";
import {
  ClerkLoaded,
  ClerkLoading,
  ClerkProvider,
} from "@clerk/clerk-expo";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { StatusBar, View, ActivityIndicator } from "react-native";

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  if (!publishableKey) {
    throw new Error("Add EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY to your .env file");
  }

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      
      {/* Loading state */}
      <ClerkLoading>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </ClerkLoading>

      {/* Loaded state */}
      <ClerkLoaded>
        <ThemeProvider value={DarkTheme}>
          <Slot />
          <StatusBar barStyle="light-content" backgroundColor="black" />
        </ThemeProvider>
      </ClerkLoaded>

    </ClerkProvider>
  );
}