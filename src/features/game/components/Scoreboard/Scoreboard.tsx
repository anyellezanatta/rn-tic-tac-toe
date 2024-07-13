import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { ScoreCard } from "@/features/game/components/Scoreboard/ScoreCard";

export const Scoreboard = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <ScoreCard title="X (YOU)" score={10} color="lightBlue" />
      <ScoreCard title="TIES" score={35} color="silver" />
      <ScoreCard title="O (CPU)" score={22} color="yellow" />
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
