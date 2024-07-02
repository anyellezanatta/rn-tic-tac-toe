import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "@/components/Icon";
import type {
  ShadowedViewColor,
  ShadowedViewSize,
} from "@/components/ShadowedView";
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
    icon: "IconRestart",
    IconProps: {
      size: "$5",
    },
  },
  argTypes: {
    icon: {
      control: "radio",
      options: Object.keys(Icons),
    },
    color: {
      control: "radio",
      options: ["yellow", "lightBlue", "silver"] as ShadowedViewColor[],
    },
    size: {
      control: "radio",
      options: ["primary", "secondary"] as ShadowedViewSize[],
    },
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
