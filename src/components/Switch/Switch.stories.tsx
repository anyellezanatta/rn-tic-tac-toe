import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "@/components/Icon";
import { colors } from "@/theme/colors";

import { Switch as SwitchComponent } from "./Switch";

const meta: Meta<typeof SwitchComponent> = {
  title: "Design System/Switch",
  component: SwitchComponent,
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
        <SwitchComponent {...props} />
      </View>
    );
  },
};

export default meta;

type Story = StoryObj<typeof SwitchComponent>;

export const Switch: Story = {};
