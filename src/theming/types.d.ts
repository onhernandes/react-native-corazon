import type { TextStyle } from "react-native";

export type Colors = {
  brand?: Record<string, string>;
  primary: string;
  secondary: string;
  background: string;
};

export type Font = {
  fontFamily: string;
  fontWeight: string | number;
};

export type FontTypes = "regular" | "medium" | "light" | "thin";

export type Fonts = {
  standard: Record<FontTypes, Font>;
  ios?: Record<FontTypes, Font>;
  android?: Record<FontTypes, Font>;
};

export type ComponentStyle = Record<string, unknown>;

export type Theme = {
  version: "0.0.1" | "m3";
  colors: Colors;
  fonts: Fonts;
  components?: Record<string, ComponentStyle>;
  typography?: Record<string, TextStyle>;
};
