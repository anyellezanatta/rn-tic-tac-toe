import type { FC } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable } from "react-native";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import { Icon, type IconName, type IconProps } from "@/components/Icon";
import type {
  ShadowedViewColor,
  ShadowedViewSize,
} from "@/components/ShadowedView";
import { ShadowedView } from "@/components/ShadowedView";
import type { TextProps } from "@/components/Text";
import { Text } from "@/components/Text";

export type ButtonProps = {
  color?: ShadowedViewColor;
  size?: ShadowedViewSize;
  title?: string;
  icon?: IconName;
  IconProps?: Omit<IconProps, "icon">;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    title,
    color = "yellow",
    size = "primary",
    icon,
    IconProps,
    style,
    onPress,
    disabled,
  } = props;

  const pressed = useSharedValue<number>(0);

  const { theme, styles } = useStyles(stylesheet);

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

  const textVariant: Record<ShadowedViewSize, TextProps["variant"]> = {
    primary: "hs",
    secondary: "xs",
  };

  const borderRadius: Record<ShadowedViewSize, number> = {
    primary: theme.spacing.$4,
    secondary: theme.spacing.$3,
  };

  const animateTo = (to: number) => {
    pressed.value = withTiming(to, { duration: 200 });
  };

  return (
    <Pressable
      style={style}
      onPressIn={() => animateTo(1)}
      onPressOut={() => animateTo(0)}
      onPress={onPress}
      disabled={disabled}>
      <ShadowedView
        size={size}
        color={color}
        containerStyle={[styles.buttonContent, animatedStyles]}
        borderRadius={borderRadius[size]}>
        {!!icon && <Icon icon={icon} {...IconProps} />}
        {!!title && (
          <Text numberOfLines={1} variant={textVariant[size]} color="darkNavy">
            {title}
          </Text>
        )}
      </ShadowedView>
    </Pressable>
  );
};

const stylesheet = createStyleSheet({
  buttonContent: {
    flexDirection: "row",
  },
});
