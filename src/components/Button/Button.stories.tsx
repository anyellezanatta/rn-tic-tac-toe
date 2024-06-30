import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "@/theme/colors";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    color: "yellow",
    size: "primary",
    title: "BUTTON",
    disabled: false,
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

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};
