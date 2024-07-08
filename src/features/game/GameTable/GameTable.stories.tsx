import type { Meta, StoryObj } from "@storybook/react";

import { GameTable as GameTableComponent } from "./GameTable";

const meta: Meta<typeof GameTableComponent> = {
  title: "Game/GameTable",
  component: GameTableComponent,
};

export default meta;

type Story = StoryObj<typeof GameTableComponent>;

export const GameButton: Story = {};
