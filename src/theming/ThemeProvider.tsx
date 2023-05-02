import React, { createContext, type PropsWithChildren } from "react";
import type { Theme } from "./types";
import * as themes from "./themes";
import { mergeRight } from "ramda";

export const ThemeContext = createContext<Theme | undefined>(undefined);

export type AvailableThemes = keyof typeof themes;

export type ThemeProviderProps = PropsWithChildren<
  | {
      theme?: Partial<Theme>;
      baseTheme?: AvailableThemes;
      themeOverride: true;
    }
  | { theme: Theme; themeOverride: false }
>;

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  let appliedTheme: Theme = themes.MaterialYou;

  if (props.themeOverride) {
    const { baseTheme = "MaterialYou" } = props;
    const customTheme = props?.theme ?? {};
    appliedTheme = mergeRight(themes[baseTheme], customTheme);
  }

  if (!props.themeOverride) {
    appliedTheme = props.theme;
  }

  return (
    <ThemeContext.Provider value={appliedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
