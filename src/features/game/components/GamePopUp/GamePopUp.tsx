import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useRouter } from "expo-router";

import { Icon } from "@/components/Icon";
import { PopUp } from "@/components/PopUp";
import type { TextColor } from "@/components/Text";
import { Text } from "@/components/Text";
import { useGame } from "@/features/game/hooks/useGame";

export const GamePopUp = () => {
  const { styles } = useStyles(stylesheet);
  const { winner, opponent, player1Mark, restart, quit } = useGame();
  const router = useRouter();
  const iconWinner =
    (winner === "p1" && player1Mark === "X") ||
    (winner === "p2" && player1Mark === "O")
      ? "IconX"
      : "IconO";

  const handleQuit = () => {
    quit();
    router.navigate("/");
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

  const selectTextColor = (): TextColor => {
    if (winner === "tie") {
      return "silver";
    }

    return (winner === "p1" && player1Mark === "X") ||
      (winner === "p2" && player1Mark === "O")
      ? "lightBlue"
      : "yellow";
  };

  if (!winner) {
    return null;
  }

  return (
    <PopUp
      buttonLeftText="QUIT"
      buttonRightText="NEXT ROUND"
      onButtonLeftPress={handleQuit}
      onButtonRightPress={handleNextRound}>
      <Text variant="body" color="silver">
        {createWinnerMessage()}
      </Text>

      <View style={styles.textContainer}>
        {winner !== "tie" ? <Icon icon={iconWinner} size="$5" /> : null}
        <Text variant="hm" color={selectTextColor()}>
          {createRoudMessage()}
        </Text>
      </View>
    </PopUp>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.$2,
  },
}));
