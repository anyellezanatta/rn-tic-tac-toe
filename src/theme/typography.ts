import type { TextStyle } from "react-native";

import { OutfitBold, OutfitMedium } from "./fonts";

export const typography = {
  hl: {
    fontFamily: OutfitBold,
    fontSize: 32,
    lineHeight: 50.4,
    letterSpacing: 2.5,
  } as TextStyle,
  hm: {
    fontFamily: OutfitBold,
    fontSize: 24,
    lineHeight: 30.24,
    letterSpacing: 1.5,
  } as TextStyle,
  hs: {
    fontFamily: OutfitBold,
    fontSize: 20,
    lineHeight: 25.2,
    letterSpacing: 1.25,
  } as TextStyle,
  xs: {
    fontFamily: OutfitBold,
    fontSize: 16,
    lineHeight: 20.16,
    letterSpacing: 1,
  } as TextStyle,
  body: {
    fontFamily: OutfitMedium,
    fontSize: 14,
    lineHeight: 17.64,
    letterSpacing: 0.88,
  } as TextStyle,
} as const;
