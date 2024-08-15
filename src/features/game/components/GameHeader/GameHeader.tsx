import type { FC } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import type { IconName } from "@/components/Icon";
import { Logo } from "@/components/Logo";
import { RestartButton } from "@/features/game/components/RestartButton";
import { TurnCard } from "@/features/game/components/TurnCard";
import { useGame } from "@/features/game/hooks/useGame";
import type { PlayerMark, PlayerType } from "@/features/game/store/gameSlice";

type GameHeaderProps = {
  style?: StyleProp<ViewStyle>;
};

const iconTurn = (
  turn: PlayerType,
  player1Mark: PlayerMark,
  opponent: PlayerType,
): IconName => {
  switch (turn) {
    case "p1":
      if (player1Mark === "X") {
        return "IconX";
      } else {
        return "IconO";
      }

    case opponent:
      if (player1Mark === "X") {
        return "IconO";
      } else {
        return "IconX";
      }

    default:
      return "IconX";
  }
};

export const GameHeader: FC<GameHeaderProps> = ({ style }) => {
  const { styles } = useStyles(stylesheet);
  const { turn, player1Mark, opponent } = useGame();

  return (
    <View style={[styles.container, style]}>
      <Logo style={styles.logo} />
      <TurnCard icon={iconTurn(turn!, player1Mark!, opponent!)} />
      <RestartButton />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    left: theme.spacing.$6,
  },
  restartButton: {
    position: "absolute",
    right: theme.spacing.$6,
  },
}));
