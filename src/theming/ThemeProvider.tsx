import React, { createContext, type PropsWithChildren } from "react";
import type { Theme } from "./types";
import { MaterialYou } from "./themes";

const themes = {
  MaterialYou,
};

export const ThemeContext = createContext<Theme | undefined>(undefined);

export type ThemeProviderProps = PropsWithChildren<{
  theme?: Theme | keyof typeof themes;
}>;

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  theme = theme ?? "MaterialYou";

  if (typeof theme === "string") {
    theme = themes[theme];
  }

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
