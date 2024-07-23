import { View } from "react-native";
import Modal from "react-native-modal";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useRouter } from "expo-router";

import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Text } from "@/components/Text";
import { useGame } from "@/features/game/hooks/useGame";

export const GamePopUp = () => {
  const { styles } = useStyles(stylesheet);
  const { winner, opponent, restart, quit } = useGame();
  const router = useRouter();

  const handleQuit = () => {
    router.navigate("/");
    quit();
  };

  const handleNextRound = () => {
    restart();
  };

  const createWinnerMessage = () => {
    if (!winner) {
      return "";
    }

    if (opponent === "cpu") {
      return winner === "p1" ? "YOU WON" : "OH NO, YOU LOST…";
    } else if (opponent === "p2") {
      return winner === "p1" ? "PLAYER 1" : "PLAYER 2";
    }
  };

  return (
    <Modal isVisible={!!winner}>
      <View style={styles.container}>
        <Text variant="body" color="silver">
          {createWinnerMessage()}
        </Text>

        <View style={styles.textContainer}>
          <Icon icon="IconX" size="$5" />
          <Text variant="hm" color="lightBlue">
            TAKES THE ROUND
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            size="secondary"
            color="silver"
            title="QUIT"
            onPress={handleQuit}
          />
          <Button
            size="secondary"
            color="yellow"
            title="NEXT ROUND"
            onPress={handleNextRound}
          />
        </View>
      </View>
    </Modal>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.semiDarkNavy,
    padding: theme.spacing.$12,
    paddingTop: theme.spacing.$10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: theme.spacing.$4,
    marginTop: theme.spacing.$8,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.$2,
  },
}));
