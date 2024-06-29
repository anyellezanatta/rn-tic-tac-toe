import type { FC } from "react";
import type { ColorValue, TextProps as RNTextProps } from "react-native";
import { Text as RNText } from "react-native";
import { useStyles } from "react-native-unistyles";

import type { typography } from "@/theme/typography";

type TextProps = RNTextProps & {
  variant: keyof typeof typography;
  color?: ColorValue;
};

export const Text: FC<TextProps> = ({ variant, color, style, ...props }) => {
  const { theme } = useStyles();

  return (
    <RNText {...props} style={[theme.typography[variant], { color }, style]}>
      {props.children}
    </RNText>
  );
};
