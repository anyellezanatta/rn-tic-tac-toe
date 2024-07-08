import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { GameTable } from "@/features/game/GameTable";
import { ScoreCard } from "@/features/game/ScoreCard";
import { TurnCard } from "@/features/game/TurnCard";

const GamePage = () => {
  const { styles } = useStyles(stylesheet);
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <View style={{ paddingTop }}>
      <View style={styles.containerHeader}>
        <Logo style={styles.logo} />
        <TurnCard icon="IconX" />
        <Button
          style={styles.buttonRestart}
          size="secondary"
          color="silver"
          icon="IconRestart"
          IconProps={{ size: "$4" }}
        />
      </View>
      <GameTable />
      <View style={styles.containerScore}>
        <ScoreCard title="X (YOU)" score={10} color="lightBlue" />
        <ScoreCard title="TIES" score={35} color="silver" />
        <ScoreCard title="O (CPU)" score={22} color="yellow" />
      </View>
    </View>
  );
};

export default GamePage;

const stylesheet = createStyleSheet((theme) => ({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "center",
    padding: theme.spacing.$6,
  },
  containerScore: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: theme.spacing.$6,
  },
  logo: {
    position: "absolute",
    left: theme.spacing.$6,
    top: theme.spacing.$6 + 4,
  },
  buttonRestart: {
    position: "absolute",
    right: theme.spacing.$6,
    top: theme.spacing.$6,
  },
}));
