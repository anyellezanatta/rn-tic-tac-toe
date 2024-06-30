import { OutfitBold, OutfitMedium } from "./fonts";

export const typography = {
  hl: {
    fontFamily: OutfitBold,
    fontSize: 32,
    lineHeight: 50,
    letterSpacing: 2.5,
  },
  hm: {
    fontFamily: OutfitBold,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 1.5,
  },
  hs: {
    fontFamily: OutfitBold,
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 1.25,
  },
  xs: {
    fontFamily: OutfitBold,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
  },
  body: {
    fontFamily: OutfitMedium,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.88,
  },
} as const;
