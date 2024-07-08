import type { FC } from "react";
import type { PressableProps } from "react-native";
import { Pressable } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Icon } from "@/components/Icon";
import { ShadowedView } from "@/components/ShadowedView";

type AssignedMark = "X" | "O";

export type GameButtonProps = PressableProps & { assignedMark?: AssignedMark };

export const GameButton: FC<GameButtonProps> = (props) => {
  const { assignedMark, onPress, style } = props;

  const { styles, theme } = useStyles(stylesheet);

  return (
    <Pressable {...props} style={style} onPress={onPress}>
      <ShadowedView
        containerStyle={styles.container}
        borderRadius={theme.spacing.$3}>
        {assignedMark === "X" ? (
          <Icon icon="IconX" />
        ) : assignedMark === "O" ? (
          <Icon icon="IconO" />
        ) : null}
      </ShadowedView>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    minWidth: theme.spacing.$24,
    minHeight: theme.spacing.$24,
    justifyContent: "center",
    alignItems: "center",
  },
}));
