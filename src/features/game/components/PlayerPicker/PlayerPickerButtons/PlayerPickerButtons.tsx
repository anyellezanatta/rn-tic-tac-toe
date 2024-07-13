import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useRouter } from "expo-router";

import { Button } from "@/components/Button";

export const PlayerPickerButtons = () => {
  const { styles } = useStyles(stylesheet);
  const router = useRouter();

  const startGame = () => {
    // TODO: replace route
    router.navigate("/game");
  };

  return (
    <View style={styles.buttonContainer}>
      <Button color="yellow" title="NEW GAME (VS CPU)" onPress={startGame} />
      <Button
        color="lightBlue"
        title="NEW GAME  (VS PLAYER)"
        onPress={startGame}
      />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  buttonContainer: {
    gap: theme.spacing.$4,
  },
}));
