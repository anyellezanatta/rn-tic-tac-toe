import type { FC } from "react";
import type { TextProps as RNTextProps } from "react-native";
import { Text as RNText } from "react-native";
import type { UnistylesVariants } from "react-native-unistyles";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export type TextProps = RNTextProps & UnistylesVariants<typeof stylesheet>;

export type TextColor = Exclude<TextProps["color"], undefined>;

export const Text: FC<TextProps> = (props) => {
  const { variant = "body", color = "silver", style, ...rest } = props;

  const { styles } = useStyles(stylesheet, {
    variant,
    color,
  });

  return (
    <RNText accessibilityRole="text" {...rest} style={[styles.text, style]}>
      {props.children}
    </RNText>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  text: {
    variants: {
      variant: theme.typography,
      color: {
        yellow: {
          color: theme.colors.yellow,
        },
        lightBlue: {
          color: theme.colors.lightBlue,
        },
        silver: {
          color: theme.colors.silver,
        },
        semiDarkNavy: {
          color: theme.colors.semiDarkNavy,
        },
        darkNavy: {
          color: theme.colors.darkNavy,
        },
      },
    },
  },
}));
