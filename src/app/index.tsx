import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { useRouter } from "expo-router";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { PlayerPickerCard } from "@/features/game/PlayerPickerCard";

const NewGameMenuPage = () => {
  const { styles } = useStyles(stylesheet);
  const router = useRouter();

  const startGame = () => {
    // TODO: replace route
    router.navigate("/game");
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <PlayerPickerCard />
      <View style={styles.buttonContainer}>
        <Button color="yellow" title="NEW GAME (VS CPU)" onPress={startGame} />
        <Button
          color="lightBlue"
          title="NEW GAME  (VS PLAYER)"
          onPress={startGame}
        />
      </View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    gap: theme.spacing.$8,
    paddingHorizontal: theme.spacing.$6,
    justifyContent: "center",
  },
  buttonContainer: {
    gap: theme.spacing.$4,
  },
  logo: {
    alignSelf: "center",
  },
}));

export default NewGameMenuPage;
