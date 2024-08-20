import { create } from "zustand";

import { Tables } from "@/database.types";

export interface UserStore {
  user: Tables<"users"> | null;
}

const userStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: Tables<"users">) => set({ user }),
}));

export default userStore;
