import type { currencyStore } from "@/lib/types";
import { create } from "zustand";

export const useCurrencyStore = create<currencyStore>((set) => ({
  from: "🇺🇸\xa0\xa0\xa0\xa0\xa0\xa0USD-US Dollar",
  setFrom: (from) => set(() => ({ from })),
  to: "🇹🇷\xa0\xa0\xa0\xa0\xa0\xa0TRY-Turkish Lira",
  setTo: (to) => set(() => ({ to })),
}));
