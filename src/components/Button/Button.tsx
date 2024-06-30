import type { FC } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
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

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Button: FC<ButtonProps> = (props) => {
  const {
    title,
    color = "yellow",
    size = "primary",
    style,
    onPress,
    disabled,
  } = props;

  const pressed = useSharedValue<number>(0);

  const { styles, theme } = useStyles(stylesheet, {
    color,
    size,
  });

  const textVariant: Record<ButtonSize, TextProps["variant"]> = {
    primary: "hs",
    secondary: "xs",
  };

  const animatedStyles = useAnimatedStyle(() => {
    const interpolateState = (normalColor: string, pressedColor: string) => {
      return interpolateColor(
        pressed.value,
        [0, 1],
        [normalColor, pressedColor],
      );
    };

    switch (color) {
      case "yellow":
        return {
          backgroundColor: interpolateState(
            theme.colors.yellow,
            theme.hovers.yellow,
          ),
        };
      case "lightBlue":
        return {
          backgroundColor: interpolateState(
            theme.colors.lightBlue,
            theme.hovers.lightBlue,
          ),
        };
      case "silver":
        return {
          backgroundColor: interpolateState(
            theme.colors.silver,
            theme.hovers.silver,
          ),
        };
      default:
        throw new Error("Invalid color");
    }
  });

  const animateTo = (to: number) => {
    pressed.value = withTiming(to, { duration: 100 });
  };

  return (
    <View style={[styles.innerShadow, style]}>
      <AnimatedPressable
        style={[styles.container, animatedStyles]}
        onPressIn={() => animateTo(1)}
        onPressOut={() => animateTo(0)}
        onPress={onPress}
        disabled={disabled}>
        <Text
          numberOfLines={1}
          variant={textVariant[size]}
          color={styles.text.color}>
          {title}
        </Text>
      </AnimatedPressable>
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
      color: {},
      size: {
        primary: {},
        secondary: {
          paddingBottom: theme.spacing.$3,
        },
      },
    },
  },
  text: {
    color: theme.colors.darkNavy,
  },
}));
