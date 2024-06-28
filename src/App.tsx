import "./theme/unistyles";

import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { StatusBar } from "expo-status-bar";

import { IconButton } from "@/components/IconButton";

export const App = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <IconButton />
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
