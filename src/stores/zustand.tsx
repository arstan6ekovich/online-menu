// stores/zustand.ts
import { create } from "zustand";

interface LanguageStore {
  language: "en" | "ru" | "kg";
  setLanguage: (language: "ru" | "en" | "kg") => void;
  t: (ru: string, en: string, kg: string) => string;
}

export const useLanguageStore = create<LanguageStore>((set, get) => ({
  language: "en",
  setLanguage: (language: "ru" | "en" | "kg") => set({ language }),
  t: (ru: string, en: string, kg: string) => {
    const currentLanguage = get().language;
    if (currentLanguage === "ru") return ru;
    if (currentLanguage === "kg") return kg;
    return en;
  },
}));
