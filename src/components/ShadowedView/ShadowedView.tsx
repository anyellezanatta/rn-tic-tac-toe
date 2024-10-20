import type { ComponentProps, FC } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import type { UnistylesVariants } from "react-native-unistyles";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ShadowedViewProps = ViewProps &
  UnistylesVariants<typeof stylesheet> & {
    containerStyle?: ComponentProps<Animated.View>["style"];
    borderRadius?: number;
    isShadowed?: boolean;
  };

export type ShadowedViewSize = Exclude<ShadowedViewProps["size"], undefined>;

export type ShadowedViewColor = Exclude<ShadowedViewProps["color"], undefined>;

export const ShadowedView: FC<ShadowedViewProps> = (props) => {
  const {
    size = "primary",
    color = "semiDarkNavy",
    borderRadius = 12,
    style,
    containerStyle,
    children,
    isShadowed = true,
    ...rest
  } = props;

  const { styles } = useStyles(stylesheet, {
    color,
    size,
  });

  return (
    <View
      style={[styles.innerShadow(isShadowed), { borderRadius }, style]}
      {...rest}>
      <Animated.View
        style={[styles.container, { borderRadius }, containerStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  innerShadow: (isShadowed: boolean) => ({
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
        semiDarkNavy: {
          backgroundColor: theme.shadows.semiDarkNavy,
        },
      },
      size: {
        primary: {
          paddingBottom: isShadowed ? theme.spacing.$2 : 0,
        },
        secondary: {
          paddingBottom: isShadowed ? theme.spacing.$1 : 0,
        },
      },
    },
  }),
  container: {
    gap: theme.spacing.$2,
    padding: theme.spacing.$4,
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
        semiDarkNavy: {
          backgroundColor: theme.colors.semiDarkNavy,
        },
      },
      size: {
        primary: {},
        secondary: {
          paddingBottom: theme.spacing.$3,
        },
      },
    },
  },
}));
