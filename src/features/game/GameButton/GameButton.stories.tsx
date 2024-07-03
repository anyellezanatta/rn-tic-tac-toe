import type { Meta, StoryObj } from "@storybook/react";

import { GameButton as GameButtonComponent } from "./GameButton";

const meta: Meta<typeof GameButtonComponent> = {
  title: "Game/GameButton",
  component: GameButtonComponent,
};

export default meta;

type Story = StoryObj<typeof GameButtonComponent>;

export const GameButton: Story = {};
