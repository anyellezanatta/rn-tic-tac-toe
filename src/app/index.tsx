import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Text } from "@/components/Text";

const NewGameMenuPage = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
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

export default NewGameMenuPage;
