import type { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { GameButton } from "@/features/game/components/GameButton";
import { useGame } from "@/features/game/hooks/useGame";
import type { PlayerType } from "@/features/game/store/gameSlice";

export const GameTable: FC = () => {
  const { styles } = useStyles(stylesheet);
  const { play, table, winner, player1Mark } = useGame();

  const getMark = (player: PlayerType) => {
    return player === undefined
      ? undefined
      : player === "p1"
        ? player1Mark
        : player1Mark === "X"
          ? "O"
          : "X";
  };
  const generateLines = (line: PlayerType[], lineIndex: number) => {
    return line.map((player, i) => (
      <GameButton
        key={String(player) + i + lineIndex}
        assignedMark={getMark(player)}
        onPress={() => play(lineIndex, i)}
        disabled={!!player || !!winner}
      />
    ));
  };

  return (
    <View style={styles.table}>
      {table.map((line, index) => (
        <View key={index} style={styles.line}>
          {generateLines(line, index)}
        </View>
      ))}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  table: {
    justifyContent: "space-between",
    gap: theme.spacing.$5,
    paddingHorizontal: theme.spacing.$6,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing.$5,
  },
}));
