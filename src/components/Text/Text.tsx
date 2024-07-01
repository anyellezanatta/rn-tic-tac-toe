import type { FC } from "react";
import type { ColorValue, TextProps as RNTextProps } from "react-native";
import { Text as RNText } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import type { typography } from "@/theme/typography";

export type TextProps = RNTextProps & {
  variant: keyof typeof typography;
  color?: ColorValue;
};

export const Text: FC<TextProps> = (props) => {
  const { variant, color, style, ...rest } = props;

  const { styles } = useStyles(stylesheet, {
    variant,
  });

  return (
    <RNText {...rest} style={[styles.text, { color }, style]}>
      {props.children}
    </RNText>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      variant: theme.typography,
    },
  },
}));
