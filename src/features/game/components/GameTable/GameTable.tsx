import type { FC } from "react";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { GameButton } from "@/features/game/components/GameButton";
import { useGame } from "@/features/game/hooks/useGame";

export const GameTable: FC = () => {
  const { styles } = useStyles(stylesheet);
  const { play, table } = useGame();

  return (
    <View style={styles.table}>
      <View style={styles.line}>
        <GameButton
          assignedMark={table[0]![0] ?? undefined}
          onPress={() => play(0, 0)}
        />
        <GameButton
          assignedMark={table[0]![1] ?? undefined}
          onPress={() => play(0, 1)}
        />
        <GameButton
          assignedMark={table[0]![2] ?? undefined}
          onPress={() => play(0, 2)}
        />
      </View>
      <View style={styles.line}>
        <GameButton
          assignedMark={table[1]![0] ?? undefined}
          onPress={() => play(1, 0)}
        />
        <GameButton
          assignedMark={table[1]![1] ?? undefined}
          onPress={() => play(1, 1)}
        />
        <GameButton
          assignedMark={table[1]![2] ?? undefined}
          onPress={() => play(1, 2)}
        />
      </View>
      <View style={styles.line}>
        <GameButton
          assignedMark={table[2]![0] ?? undefined}
          onPress={() => play(2, 0)}
        />
        <GameButton
          assignedMark={table[2]![1] ?? undefined}
          onPress={() => play(2, 1)}
        />
        <GameButton
          assignedMark={table[2]![2] ?? undefined}
          onPress={() => play(2, 2)}
        />
      </View>
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
