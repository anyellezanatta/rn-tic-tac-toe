import { View } from "react-native";

import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";

import type { TextColor } from "./Text";
import { Text as TextComponent } from "./Text";

const variants = Object.keys(typography) as (keyof typeof typography)[];

const colorOptions: TextColor[] = [
  "silver",
  "darkNavy",
  "semiDarkNavy",
  "lightBlue",
  "yellow",
];

const meta: Meta<typeof TextComponent> = {
  title: "Design System/Text",
  component: TextComponent,
  args: {
    children: "Cool Text!",
    color: "silver",
  },
  argTypes: {
    color: {
      control: "radio",
      options: colorOptions,
    },
  },
  render: (props) => {
    return (
      <>
        {variants.map((variant) => (
          <View key={variant} style={{ alignItems: "center" }}>
            <TextComponent variant="body" color="silver">
              {variant}
            </TextComponent>
            <View
              key={variant}
              style={{ borderWidth: 1, borderColor: colors.lightBlue }}>
              <TextComponent {...props} variant={variant} />
            </View>
          </View>
        ))}
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof TextComponent>;

export const Text: Story = {};
