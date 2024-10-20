import type { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { GameButton } from "@/features/game/components/GameButton";
import { useGame } from "@/features/game/hooks/useGame";
import type { PlayerType } from "@/features/game/store/gameSlice";

export const GameTable: FC = () => {
  const { styles } = useStyles(stylesheet);
  const { play, table, winner, player1Mark, turn } = useGame();

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
    return line.map((player, column) => {
      const assignedMark = getMark(player);
      const cellPosition = `Cell Line ${lineIndex + 1} Column ${column + 1}`;
      const accessibilityLabel = `${cellPosition}: ${assignedMark ? assignedMark : "Empty"}`;

      return (
        <GameButton
          key={String(player) + column + lineIndex}
          assignedMark={assignedMark}
          onPress={() => play(lineIndex, column)}
          disabled={!!player || !!winner || turn === "cpu"}
          accessibilityLabel={accessibilityLabel}
        />
      );
    });
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
