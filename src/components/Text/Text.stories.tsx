import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";

import { Text } from "./Text";

const variants = Object.keys(typography) as (keyof typeof typography)[];

const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  args: {
    children: "Cool Text!",
    color: colors.silver,
  },
  render: (props) => {
    return (
      <>
        {variants.map((variant) => (
          <View key={variant} style={{ alignItems: "center" }}>
            <Text variant="body" color={colors.silver}>
              {variant}
            </Text>
            <View
              key={variant}
              style={{ borderWidth: 1, borderColor: colors.lightBlue }}>
              <Text {...props} variant={variant} />
            </View>
          </View>
        ))}
      </>
    );
  },
  decorators: [
    (Story) => (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          gap: 8,
          backgroundColor: colors.darkNavy,
        }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Variants: Story = {};
