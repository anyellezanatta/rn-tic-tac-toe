import { View } from "react-native";
import Modal from "react-native-modal";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useRouter } from "expo-router";

import { Button } from "@/components/Button";
import type { IconName } from "@/components/Icon";
import { Icon } from "@/components/Icon";
import type { TextColor } from "@/components/Text";
import { Text } from "@/components/Text";
import { useGame } from "@/features/game/hooks/useGame";

export const GamePopUp = () => {
  const { styles } = useStyles(stylesheet);
  const { winner, opponent, player1Mark, restart, quit } = useGame();
  const router = useRouter();

  const handleQuit = () => {
    router.navigate("/");
    quit();
  };

  const handleNextRound = () => {
    restart();
  };

  const createWinnerMessage = () => {
    if (!winner || winner === "tie") {
      return "";
    }

    if (opponent === "cpu") {
      return winner === "p1" ? "YOU WON" : "OH NO, YOU LOST…";
    } else if (opponent === "p2") {
      return winner === "p1" ? "PLAYER 1" : "PLAYER 2";
    }
  };

  const createRoudMessage = () => {
    if (winner === "tie") {
      if (opponent === "p2") {
        return "ROUND TIED";
      }
      if (opponent === "cpu") {
        return "RESTART GAME?";
      }
    }

    return "TAKES THE ROUND";
  };

  const iconMessage = (): IconName => {
    return winner === "p1" && player1Mark === "X" ? "IconX" : "IconO";
  };

  const selectTextColor = (): TextColor => {
    if (winner === "tie") {
      return "silver";
    }

    return winner === "p1" && player1Mark === "X" ? "lightBlue" : "yellow";
  };

  return (
    <Modal isVisible={!!winner}>
      <View style={styles.container}>
        <Text variant="body" color="silver">
          {createWinnerMessage()}
        </Text>

        <View style={styles.textContainer}>
          {winner !== "tie" ? <Icon icon={iconMessage()} size="$5" /> : null}
          <Text variant="hm" color={selectTextColor()}>
            {createRoudMessage()}
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
