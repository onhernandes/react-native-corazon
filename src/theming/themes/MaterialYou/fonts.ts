import type { Fonts } from "src/theming/types";

export const fontFamily =
  'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif';

export const FONTS_WEIGHT = {
  regular: "400",
  medium: "500",
  light: "300",
  thin: "100",
} as const;

export const standard = {
  regular: {
    fontFamily,
    fontWeight: FONTS_WEIGHT.regular,
  },
  medium: {
    fontFamily,
    fontWeight: FONTS_WEIGHT.medium,
  },
  light: {
    fontFamily,
    fontWeight: FONTS_WEIGHT.light,
  },
  thin: {
    fontFamily,
    fontWeight: FONTS_WEIGHT.thin,
  },
} as const;

export const ios = {
  regular: {
    fontFamily: "System",
    fontWeight: FONTS_WEIGHT.regular,
  },
  medium: {
    fontFamily: "System",
    fontWeight: FONTS_WEIGHT.medium,
  },
  light: {
    fontFamily: "System",
    fontWeight: FONTS_WEIGHT.light,
  },
  thin: {
    fontFamily: "System",
    fontWeight: FONTS_WEIGHT.thin,
  },
} as const;

const fonts: Fonts = {
  standard,
  ios,
};

export default fonts;
