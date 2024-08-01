import { describe, it, expect, jest } from "@jest/globals";
import { render, screen, userEvent } from "@testing-library/react-native";

import { Button } from "./Button";

describe("Button", () => {
  it("should trigger the onPress event", async () => {
    const onPress = jest.fn();

    const user = userEvent.setup();
    render(<Button onPress={onPress} title="Test Button" />);

    await user.press(screen.getByRole("button", { name: "Test Button" }));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("should not trigger the onPress event when disabled", async () => {
    const onPress = jest.fn();

    const user = userEvent.setup();
    render(<Button onPress={onPress} title="Test Button" disabled />);

    await user.press(screen.getByRole("button", { name: "Test Button" }));

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should render the title", () => {
    render(<Button title="Test Button" />);

    expect(screen.getByText("Test Button")).toBeDefined();
  });

  it("should render the icon", () => {
    render(<Button icon="IconRestart" />);

    expect(screen.getByLabelText("IconRestart")).toBeDefined();
  });
});
