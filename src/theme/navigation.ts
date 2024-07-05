import { DarkTheme } from "@react-navigation/native";

import { theme } from "./theme";

export const DarkNavigationTheme: typeof DarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: theme.colors.darkNavy,
  },
};
