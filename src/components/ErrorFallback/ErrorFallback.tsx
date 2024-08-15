import { DevSettings, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";

export const ErrorFallback = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Icon icon="IconError" />
      <Text variant="hs" color="silver">
        SORRY.. THERE WAS A ERROR
      </Text>
      <Button
        title="RELOAD"
        color="silver"
        size="primary"
        onPress={() => {
          DevSettings.reload();
        }}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.darkNavy,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.$16,
  },
}));
