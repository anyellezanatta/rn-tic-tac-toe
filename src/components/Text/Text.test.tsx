import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react-native";

import { theme } from "@/theme/theme";

import { Text } from "./Text";

describe("Text", () => {
  it("should render with the correctly text", () => {
    render(<Text>Test</Text>);

    expect(screen.getByRole("text", { name: "Test" })).toBeDefined();
  });

  it("should render with the correctly text and color", () => {
    render(<Text color="silver">Test</Text>);

    expect(screen.getByRole("text", { name: "Test" })).toHaveStyle({
      color: theme.colors.silver,
    });
  });

  it("should render with the correctly text and variant", () => {
    render(<Text variant="hs">Test</Text>);

    expect(screen.getByRole("text", { name: "Test" })).toHaveStyle({
      fontSize: theme.typography.hs.fontSize,
    });
  });
});
