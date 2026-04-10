import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { type SettingsStore } from "./settings-type";

const useSettingsStore = create(
  persist<SettingsStore>(
    (set) => ({
      showOnboarding: true,
      finishOnboarding: () => set({ showOnboarding: false }),
    }),
    {
      name: "@Settings",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export function useShowOnboarding(): Pick<SettingsStore, "showOnboarding">["showOnboarding"] {
  return useSettingsStore((state) => state.showOnboarding);
}

export function useSettingsService(): Pick<SettingsStore, "finishOnboarding"> {
  const finishOnboarding = useSettingsStore((state) => state.finishOnboarding);

  return { finishOnboarding };
}
