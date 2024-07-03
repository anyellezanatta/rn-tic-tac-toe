import type { FC } from "react";
import type { PressableProps } from "react-native";
import { Pressable } from "react-native";
import { useStyles } from "react-native-unistyles";

import { Icon } from "@/components/Icon";
import { ShadowedView } from "@/components/ShadowedView";

type AssignedMark = "X" | "O";

export type GameButtonProps = PressableProps & { assignedMark?: AssignedMark };

export const GameButton: FC<GameButtonProps> = (props) => {
  const { assignedMark, onPress, style } = props;

  const { theme } = useStyles();

  return (
    <Pressable {...props} style={style} onPress={onPress}>
      <ShadowedView borderRadius={theme.spacing.$3}>
        {assignedMark === "X" ? <Icon icon="IconX" /> : <Icon icon="IconO" />}
      </ShadowedView>
    </Pressable>
  );
};
