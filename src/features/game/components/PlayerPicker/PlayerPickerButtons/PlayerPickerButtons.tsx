import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useRouter } from "expo-router";

import { Button } from "@/components/Button";
import { useGame } from "@/features/game/hooks/useGame";
import type { OpponentType } from "@/features/game/store/gameSlice";

export const PlayerPickerButtons = () => {
  const { styles } = useStyles(stylesheet);
  const router = useRouter();
  const { newGame } = useGame();

  const startGame = (opponent: OpponentType) => {
    // TODO: replace route
    router.navigate("/game");
    newGame(opponent);
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        color="yellow"
        title="NEW GAME (VS CPU)"
        onPress={() => startGame("cpu")}
      />
      <Button
        color="lightBlue"
        title="NEW GAME (VS PLAYER)"
        onPress={() => startGame("p2")}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  buttonContainer: {
    gap: theme.spacing.$4,
  },
}));
