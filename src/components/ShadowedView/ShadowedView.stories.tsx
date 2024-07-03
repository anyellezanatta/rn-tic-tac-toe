import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "@/components/Icon";

import type { ShadowedViewColor, ShadowedViewSize } from "./ShadowedView";
import { ShadowedView as ShadowedViewComponent } from "./ShadowedView";

const sizeOptions: ShadowedViewSize[] = ["primary", "secondary"];

const colorOptions: ShadowedViewColor[] = [
  "yellow",
  "lightBlue",
  "silver",
  "semiDarkNavy",
];

const meta: Meta<typeof ShadowedViewComponent> = {
  title: "Design System/ShadowedView",
  component: ShadowedViewComponent,
  args: {
    color: "semiDarkNavy",
    size: "primary",
    borderRadius: undefined,
  },
  argTypes: {
    color: {
      control: "radio",
      options: colorOptions,
    },
    size: {
      control: "radio",
      options: sizeOptions,
    },
  },
  render: (props) => {
    return (
      <ShadowedViewComponent {...props}>
        <Icon icon="IconO" />
      </ShadowedViewComponent>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ShadowedViewComponent>;

export const ShadowedView: Story = {};
