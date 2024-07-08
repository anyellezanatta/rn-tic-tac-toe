import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { GameButton } from "@/features/game/GameButton";

export const GameTable = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.table}>
      <View style={styles.line}>
        <GameButton assignedMark="X" />
        <GameButton assignedMark="O" />
        <GameButton />
      </View>
      <View style={styles.line}>
        <GameButton assignedMark="X" />
        <GameButton assignedMark="O" />
        <GameButton />
      </View>
      <View style={styles.line}>
        <GameButton />
        <GameButton assignedMark="O" />
        <GameButton />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  table: {
    justifyContent: "space-between",
    gap: theme.spacing.$5,
    padding: theme.spacing.$6,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing.$5,
  },
}));
