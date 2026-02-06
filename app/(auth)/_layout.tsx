import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function RootChatLayout() {
  return (
    <>
      <SignedIn>
        <Redirect href="/(chat)" />
      </SignedIn>

      <SignedOut>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </SignedOut>
    </>
  );
}