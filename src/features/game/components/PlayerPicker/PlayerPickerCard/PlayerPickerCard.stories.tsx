import type { Meta, StoryObj } from "@storybook/react";

import { PlayerPickerCard as PlayerPickerCardComponent } from "./PlayerPickerCard";

const meta: Meta<typeof PlayerPickerCardComponent> = {
  title: "Game/PlayerPickerCard",
  component: PlayerPickerCardComponent,
};

export default meta;

type Story = StoryObj<typeof PlayerPickerCardComponent>;

export const PlayerPickerCard: Story = {};
