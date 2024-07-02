import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "@/components/Icon";
import { colors } from "@/theme/colors";

import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Switch",
  component: Switch,
  args: {
    iconLeft: "IconX",
    iconRight: "IconO",
  },
  argTypes: {
    iconLeft: {
      control: "radio",
      options: Object.keys(Icons),
    },
    iconRight: {
      control: "radio",
      options: Object.keys(Icons),
    },
  },
  render: (props) => {
    return (
      <View
        style={{
          padding: 16,
          backgroundColor: colors.semiDarkNavy,
          borderRadius: 16,
        }}>
        <Switch {...props} />
      </View>
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

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {};
