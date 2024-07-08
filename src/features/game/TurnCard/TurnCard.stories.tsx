import type { Meta, StoryObj } from "@storybook/react";

import { TurnCard as TurnCardComponent } from "./TurnCard";

const meta: Meta<typeof TurnCardComponent> = {
  title: "Game/TurnCard",
  component: TurnCardComponent,
  args: {
    icon: "IconX",
  },
};

export default meta;

type Story = StoryObj<typeof TurnCardComponent>;

export const TurnCard: Story = {};
