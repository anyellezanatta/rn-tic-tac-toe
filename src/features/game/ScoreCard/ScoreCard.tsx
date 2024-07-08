import type { FC } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import type { ShadowedViewColor } from "@/components/ShadowedView";
import { ShadowedView } from "@/components/ShadowedView";
import { Text } from "@/components/Text";

export type ScoreCardProps = {
  color?: ShadowedViewColor;
  title: string;
  score: number;
};

export const ScoreCard: FC<ScoreCardProps> = (props) => {
  const { title, score, color } = props;
  const { styles } = useStyles(stylesheet);

  return (
    <ShadowedView
      color={color}
      isShadowed={false}
      containerStyle={styles.container}>
      <Text color="darkNavy">{title}</Text>
      <Text variant="xs" color="darkNavy">
        {score}
      </Text>
    </ShadowedView>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing.$3,
    minHeight: theme.spacing.$16,
    minWidth: theme.spacing.$24,
    gap: 0,
  },
}));
