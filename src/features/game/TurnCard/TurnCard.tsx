import type { FC } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import type { IconName } from "@/components/Icon";
import { Icon } from "@/components/Icon";
import { ShadowedView } from "@/components/ShadowedView";
import { Text } from "@/components/Text";

export type TurnCardProps = { icon: IconName };

export const TurnCard: FC<TurnCardProps> = (props) => {
  const { icon } = props;

  const { styles, theme } = useStyles(stylesheet);

  // TODO: Bold
  return (
    <ShadowedView
      size="secondary"
      borderRadius={theme.spacing.$1}
      containerStyle={styles.container}>
      <Icon icon={icon} fill={theme.colors.silver} size="$4" />
      <Text>TURN</Text>
    </ShadowedView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.$2,
  },
}));
