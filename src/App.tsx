import "@/theme/unistyles";

import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { StatusBar } from "expo-status-bar";

import { Text } from "@/components/Text";
import { useAppLoading } from "@/hooks/useAppLoading";

export const App = () => {
  const { isLoaded, isError, onLayoutRootView } = useAppLoading();
  const { styles } = useStyles(stylesheet);

  if (!isLoaded && !isError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <Text variant="hl" color="red">
        LOREM IPSUM DOLOR
      </Text>
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
