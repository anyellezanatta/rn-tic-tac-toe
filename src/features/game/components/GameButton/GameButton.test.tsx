import { describe, expect, it, jest } from "@jest/globals";
import { render, userEvent, screen } from "@testing-library/react-native";

import { GameButton } from "./GameButton";

describe("GameButton", () => {
  it("should trigger the onPress event", async () => {
    const onPress = jest.fn();

    const user = userEvent.setup();
    render(<GameButton onPress={onPress} />);

    await user.press(screen.getByRole("button"));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("should not trigger the onPress event when disabled", async () => {
    const onPress = jest.fn();

    const user = userEvent.setup();
    render(<GameButton onPress={onPress} disabled />);

    await user.press(screen.getByRole("button"));

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should not trigger the onPress event when assigned", async () => {
    const onPress = jest.fn();

    const user = userEvent.setup();
    render(<GameButton onPress={onPress} assignedMark="X" />);

    await user.press(screen.getByRole("button"));

    expect(onPress).not.toHaveBeenCalled();
  });

  it("should render the mark X when assign X", () => {
    render(<GameButton assignedMark="X" />);

    expect(screen.getByLabelText("IconX")).toBeDefined();
  });

  it("should not render the mark when not assign", () => {
    render(<GameButton />);

    expect(screen.queryByLabelText("IconX")).toBeNull();
    expect(screen.queryByLabelText("IconO")).toBeNull();
  });

  it("should render the mark O when assign O ", () => {
    render(<GameButton assignedMark="O" />);

    expect(screen.getByLabelText("IconO")).toBeDefined();
  });
});
