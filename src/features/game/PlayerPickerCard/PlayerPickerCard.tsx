import { createStyleSheet, useStyles } from "react-native-unistyles";

import { ShadowedView } from "@/components/ShadowedView";
import { Switch } from "@/components/Switch";
import { Text } from "@/components/Text";

export const PlayerPickerCard = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <ShadowedView containerStyle={styles.container}>
      <Text variant="xs" color="silver">
        PICK PLAYER 1'S MARK
      </Text>
      <Switch iconLeft="IconX" iconRight="IconO" style={styles.switch} />
      <Text variant="xs" color="silver">
        REMEMBER : X GOES FIRST
      </Text>
    </ShadowedView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.spacing.$6,
    gap: theme.spacing.$4,
    alignItems: "center",
  },
  switch: {
    marginTop: theme.spacing.$2,
    alignSelf: "stretch",
  },
}));
