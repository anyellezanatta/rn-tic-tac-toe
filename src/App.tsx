import "@/theme/unistyles";

import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { StatusBar } from "expo-status-bar";

import { IconButton } from "@/components/IconButton";
import { useAppLoading } from "@/hooks/useAppLoading";

import { IconO } from "./components/Icon/IconO";

export const App = () => {
  const { isLoaded, isError, onLayoutRootView } = useAppLoading();
  const { styles, theme } = useStyles(stylesheet);

  if (!isLoaded && !isError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Text style={[theme.typography.hl, { color: theme.colors.silver }]}>
        LOREM IPSUM DOLOR
      </Text>
      <IconButton />
      <IconO width={24} height={24} />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.darkNavy,
    alignItems: "center",
    justifyContent: "center",
  },
}));
