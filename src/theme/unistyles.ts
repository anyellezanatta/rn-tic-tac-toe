import { UnistylesRegistry } from "react-native-unistyles";

import { theme } from "./theme";

type AppThemes = {
  dark: typeof theme;
};
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  dark: theme,
}).addConfig({
  //adaptiveThemes: true,
});
