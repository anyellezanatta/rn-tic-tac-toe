import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "@/components/Icon";
import type {
  ShadowedViewColor,
  ShadowedViewSize,
} from "@/components/ShadowedView";

import { Button as ButtonComponent } from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  title: "Design System/Button",
  component: ButtonComponent,
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
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {};
