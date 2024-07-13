import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Logo } from "@/components/Logo";
import {
  PlayerPickerButtons,
  PlayerPickerCard,
} from "@/features/game/components/PlayerPicker";

const NewGameMenuPage = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <PlayerPickerCard />
      <PlayerPickerButtons />
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
  logo: {
    alignSelf: "center",
  },
}));

export default NewGameMenuPage;
