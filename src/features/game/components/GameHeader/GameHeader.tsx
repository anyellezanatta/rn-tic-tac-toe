import type { FC } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { TurnCard } from "@/features/game/components/TurnCard";
import { useGame } from "@/features/game/hooks/useGame";

type GameHeaderProps = {
  style?: StyleProp<ViewStyle>;
};

export const GameHeader: FC<GameHeaderProps> = ({ style }) => {
  const { styles } = useStyles(stylesheet);
  const { turn, restart } = useGame();

  return (
    <View style={[styles.container, style]}>
      <Logo style={styles.logo} />
      <TurnCard icon={turn.board === "X" ? "IconX" : "IconO"} />
      <Button
        style={styles.restartButton}
        size="secondary"
        color="silver"
        icon="IconRestart"
        IconProps={{ size: "$4" }}
        onPress={restart}
      />
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
