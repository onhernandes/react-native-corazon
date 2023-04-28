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

export type Fonts = {
  ios?: Record<string, FontConfig>;
  android?: Record<string, FontConfig>;
};

export type ComponentStyle = Record<string, unknown>;

export type Theme = {
  version: "0.0.1" | "m3";
  colors: Colors;
  fonts: Fonts;
  components?: Record<string, ComponentStyle>;
};
