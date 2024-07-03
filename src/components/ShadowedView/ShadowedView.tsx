import type { ComponentProps, FC, ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import type { UnistylesVariants } from "react-native-unistyles";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ShadowedViewProps = UnistylesVariants<typeof stylesheet> & {
  style?: StyleProp<ViewStyle>;
  containerStyle?: ComponentProps<Animated.View>["style"];
  children?: ReactNode;
  borderRadius?: number;
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
    ...rest
  } = props;

  const { styles } = useStyles(stylesheet, {
    color,
    size,
  });

  return (
    <View style={[styles.innerShadow, { borderRadius }, style]} {...rest}>
      <Animated.View
        style={[styles.container, { borderRadius }, containerStyle]}>
        {children}
      </Animated.View>
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  innerShadow: {
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
          paddingBottom: theme.spacing.$2,
        },
        secondary: {
          paddingBottom: theme.spacing.$1,
        },
      },
    },
  },
  container: {
    gap: theme.spacing.$2,
    alignItems: "center",
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
