import type { Meta, StoryObj } from "@storybook/react";

import { Logo as LogoComponent } from "./Logo";

const meta: Meta<typeof LogoComponent> = {
  title: "Design System/Logo",
  component: LogoComponent,
};

export default meta;

type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {};
