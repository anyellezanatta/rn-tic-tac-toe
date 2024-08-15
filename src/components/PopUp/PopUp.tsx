import type { FC } from "react";
import { View, type ViewProps } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Button } from "@/components/Button";

export type PopUpProps = ViewProps & {
  buttonLeftText: string;
  buttonRightText: string;
  onButtonLeftPress: () => void;
  onButtonRightPress: () => void;
};

export const PopUp: FC<PopUpProps> = (props) => {
  const {
    buttonLeftText,
    buttonRightText,
    onButtonLeftPress,
    onButtonRightPress,
    children,
    style,
    ...rest
  } = props;

  const { styles } = useStyles(stylesheet);

  return (
    <Animated.View
      {...rest}
      style={[styles.modal, style]}
      entering={FadeInDown}
      exiting={FadeOutDown}>
      <View style={styles.container}>
        {children}
        <View style={styles.buttonContainer}>
          <Button
            size="secondary"
            color="silver"
            title={buttonLeftText}
            onPress={onButtonLeftPress}
          />
          <Button
            size="secondary"
            color="yellow"
            title={buttonRightText}
            onPress={onButtonRightPress}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  modal: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
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
}));
