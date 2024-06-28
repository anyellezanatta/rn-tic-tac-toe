import { Pressable, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const IconButton = () => {
  const { styles } = useStyles(styleSheet);

  return (
    <Pressable style={styles.button}>
      <Text>Click me</Text>
    </Pressable>
  );
};

const styleSheet = createStyleSheet((theme) => ({
  button: {
    backgroundColor: theme.colors.darkNavy,
    borderRadius: theme.spacing.$4,
    padding: theme.spacing.$4,
    shadowRadius: theme.spacing.$4,
    shadowColor: theme.colors.silver,
  },
}));
