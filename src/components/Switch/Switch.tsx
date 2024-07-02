import type { FC } from "react";
import { useState } from "react";
import type { LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";

import type { IconName } from "@/components/Icon";
import { Icon } from "@/components/Icon";

export type SwitchControlProps = {
  iconLeft: IconName;
  iconRight: IconName;
  onChangeValue?: (selectedIndex: number) => void;
  style?: StyleProp<ViewStyle>;
};

export const Switch: FC<SwitchControlProps> = (props) => {
  const { iconLeft, iconRight, style, onChangeValue } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  const { styles, theme } = useStyles(stylesheet);

  const animatedIndicatorStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(selectedIndex * (trackWidth / 2), {
            duration: 100,
          }),
        },
      ],
    };
  });

  const onLayout = (event: LayoutChangeEvent) => {
    setTrackWidth(event.nativeEvent.layout.width);
  };

  const handlePress = () => {
    setSelectedIndex((oldSelection) => (oldSelection === 0 ? 1 : 0));
    onChangeValue?.(selectedIndex);
  };

  const renderItem = (icon: IconName, index: number) => {
    return (
      <View key={`${icon}-${index}`} style={styles.segment}>
        <Icon
          icon={icon}
          size="$8"
          fill={
            index !== selectedIndex
              ? theme.colors.silver
              : theme.colors.darkNavy
          }
        />
      </View>
    );
  };

  return (
    <Pressable style={[styles.container, style]} onPress={handlePress}>
      <View style={styles.track} onLayout={onLayout}>
        <Animated.View style={[styles.indicator, animatedIndicatorStyles]} />
        <View style={styles.segmentsContainer}>
          {[iconLeft, iconRight].map(renderItem)}
        </View>
      </View>
    </Pressable>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: theme.spacing.$2,
    backgroundColor: theme.colors.darkNavy,
    borderRadius: theme.spacing.$4,
    minWidth: 150,
    flexDirection: "row",
  },
  track: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  segmentsContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  segment: {
    flex: 1,
    padding: theme.spacing.$3,
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    position: "absolute",
    borderRadius: theme.spacing.$4,
    backgroundColor: theme.colors.silver,
    width: "50%",
    height: "100%",
  },
}));
