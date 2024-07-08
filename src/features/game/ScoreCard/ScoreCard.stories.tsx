import type { Meta, StoryObj } from "@storybook/react";

import { ScoreCard as ScoreCardComponent } from "./ScoreCard";

const meta: Meta<typeof ScoreCardComponent> = {
  title: "Game/ScoreCard",
  component: ScoreCardComponent,
};

export default meta;

type Story = StoryObj<typeof ScoreCardComponent>;

export const GameButton: Story = {};
