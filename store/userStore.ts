import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

import { Tables } from "@/database.types";

export interface UserStore {
  user: Tables<"users"> | null;
  setUser: (user: Tables<"users">) => void;
  initUser: () => Promise<void>;
}

const USER_STORAGE_KEY = "@user_info";

const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: async (user: Tables<"users">) => {
    set({ user });
    try {
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error("Failed to save user to AsyncStorage:", error);
    }
  },
  initUser: async () => {
    try {
      const userJson = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (userJson) {
        const user = JSON.parse(userJson) as Tables<"users">;
        set({ user });
      }
    } catch (error) {
      console.error("Failed to load user from AsyncStorage:", error);
    }
  },
}));

export default userStore;
