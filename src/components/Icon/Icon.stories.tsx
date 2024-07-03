import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { Icon as IconComponent } from "./Icon";
import { Icons } from "./icons";

const meta: Meta<typeof IconComponent> = {
  title: "Design System/Icon",
  component: IconComponent,
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
        <IconComponent {...props} />
      </View>
    );
  },
};

export default meta;

type Story = StoryObj<typeof IconComponent>;

export const Icon: Story = {};
