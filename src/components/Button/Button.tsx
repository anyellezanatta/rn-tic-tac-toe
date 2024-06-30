import type { FC } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, View } from "react-native";
import type { UnistylesVariants } from "react-native-unistyles";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import type { TextProps } from "@/components/Text";
import { Text } from "@/components/Text";

export type ButtonProps = UnistylesVariants<typeof stylesheet> & {
  title?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
};

type ButtonSize = Exclude<ButtonProps["size"], undefined>;

export const Button: FC<ButtonProps> = (props) => {
  const {
    title,
    color = "yellow",
    size = "primary",
    style,
    onPress,
    disabled,
  } = props;

  const { styles } = useStyles(stylesheet, {
    color,
    size,
  });

  const textVariant: Record<ButtonSize, TextProps["variant"]> = {
    primary: "hs",
    secondary: "xs",
  };

  return (
    <View style={[styles.innerShadow, style]}>
      <Pressable style={styles.container} onPress={onPress} disabled={disabled}>
        <Text variant={textVariant[size]} color={styles.text.color}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  innerShadow: {
    borderRadius: theme.spacing.$4,
    variants: {
      color: {
        yellow: {
          backgroundColor: theme.shadows.yellow,
        },
        lightBlue: {
          backgroundColor: theme.shadows.lightBlue,
        },
        silver: {
          backgroundColor: theme.shadows.silver,
        },
      },
      size: {
        primary: {
          paddingBottom: theme.spacing.$2,
        },
        secondary: {
          paddingBottom: theme.spacing.$1,
        },
      },
    },
  },
  container: {
    padding: theme.spacing.$4,
    borderRadius: theme.spacing.$4,
    variants: {
      color: {
        yellow: {
          backgroundColor: theme.colors.yellow,
        },
        lightBlue: {
          backgroundColor: theme.colors.lightBlue,
        },
        silver: {
          backgroundColor: theme.colors.silver,
        },
      },
      size: {},
    },
  },
  text: {
    color: theme.colors.darkNavy,
  },
}));
