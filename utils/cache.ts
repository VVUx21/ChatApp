import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import { TokenCache } from "@clerk/clerk-expo";

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key);

        if (item) {
          console.log(`${key} was used 🔐`);
        }

        return item;
      } catch (error) {
        console.error("SecureStore get error:", error);
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },

    saveToken: async (key: string, token: string) => {
      await SecureStore.setItemAsync(key, token);
    },
  };
};

// SecureStore not supported on web
export const tokenCache =
  Platform.OS !== "web" ? createTokenCache() : undefined;