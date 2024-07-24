import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { ScoreCard } from "@/features/game/components/Scoreboard/ScoreCard";
import { useGame } from "@/features/game/hooks/useGame";

export const Scoreboard = () => {
  const { styles } = useStyles(stylesheet);
  const { score, player1Mark } = useGame();

  return (
    <View style={styles.container}>
      <ScoreCard
        title={player1Mark === "X" ? "X (YOU)" : "X (CPU)"}
        score={player1Mark === "X" ? score.player1 : score.opponent}
        color="lightBlue"
      />
      <ScoreCard title="TIES" score={score.ties} color="silver" />
      <ScoreCard
        title={player1Mark === "O" ? "O (YOU)" : "O (CPU)"}
        score={player1Mark === "O" ? score.player1 : score.opponent}
        color="yellow"
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing.$6,
  },
}));
