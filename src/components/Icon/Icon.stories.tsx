import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/components/Icon/Icon";
import { colors } from "@/theme/colors";

import { Icons } from "./icons";

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
  args: {
    icon: "IconO",
    size: "$10",
  },
  argTypes: {
    icon: {
      control: "radio",
      options: Object.keys(Icons),
    },
    size: {
      control: "radio",
      options: ["$4", "$5", "$8", "$10", "$16"],
    },
  },
  render: (props) => {
    return (
      <View
        style={{
          padding: 16,
          backgroundColor: "black",
          borderRadius: 16,
        }}>
        <Icon {...props} />
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

type Story = StoryObj<typeof Icon>;

export const Basic: Story = {};
