import { createContext, useContext, useEffect, useState } from "react";

interface ThemeCtx {
  isDark: boolean;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ isDark: true, toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggle: () => setIsDark((d) => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
