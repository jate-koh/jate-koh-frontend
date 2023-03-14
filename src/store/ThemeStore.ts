
import { create } from 'zustand';

type ThemeMode = 'light' | 'dark';

export const useThemeStore = create((set) => ({
    theme: 'dark',
    setTheme: (theme: ThemeMode ) => set({ theme }),
}));