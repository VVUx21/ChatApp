import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function ChatLayout() {
  return (
    <>
      <SignedOut>
        <Redirect href="/(auth)" />
      </SignedOut>

      <SignedIn>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SignedIn>
    </>
  );
}