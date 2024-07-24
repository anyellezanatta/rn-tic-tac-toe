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
});
