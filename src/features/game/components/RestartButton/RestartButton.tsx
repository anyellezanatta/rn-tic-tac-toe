import { useState } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Portal } from "@gorhom/portal";

import { Button } from "@/components/Button";
import { PopUp } from "@/components/PopUp";
import { Text } from "@/components/Text";
import { useGame } from "@/features/game/hooks/useGame";

export const RestartButton = () => {
  const { styles } = useStyles(stylesheet);
  const { restart } = useGame();
  const [isRestarting, setIsRestarting] = useState(false);

  const handleCancelPress = () => {
    setIsRestarting(false);
  };

  const handleRestartPress = () => {
    restart();
    setIsRestarting(false);
  };

  const handleConfirmationPress = () => {
    setIsRestarting(true);
  };

  return (
    <>
      <Button
        style={styles.restartButton}
        size="secondary"
        color="silver"
        icon="IconRestart"
        IconProps={{ size: "$4" }}
        onPress={handleConfirmationPress}
        accessibilityLabel="Restart Game"
      />
      <Portal>
        {isRestarting && (
          <PopUp
            buttonLeftText="NO, CANCEL"
            buttonRightText="YES, RESTART"
            onButtonLeftPress={handleCancelPress}
            onButtonRightPress={handleRestartPress}>
            <Text color="silver" variant="hm">
              RESTART GAME?
            </Text>
          </PopUp>
        )}
      </Portal>
    </>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  restartButton: {
    position: "absolute",
    right: theme.spacing.$6,
  },
}));
