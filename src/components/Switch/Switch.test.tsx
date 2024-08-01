import { describe, expect, it, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { Switch } from "./Switch";

describe("Switch", () => {
  it("should trigger the onPress event", () => {
    const onEventMock = jest.fn();

    render(
      <Switch iconLeft="IconX" iconRight="IconO" onChangeValue={onEventMock} />,
    );

    fireEvent(screen.getByRole("switch"), "onPress");

    expect(onEventMock).toHaveBeenCalledTimes(1);
  });

  it("should trigger the onPress and change the selected index", () => {
    const onEventMock = jest.fn((selectedIndex: number) => selectedIndex);

    render(
      <Switch iconLeft="IconX" iconRight="IconO" onChangeValue={onEventMock} />,
    );

    fireEvent(screen.getByRole("switch"), "onPress");

    expect(onEventMock).toHaveBeenCalledTimes(1);
    expect(onEventMock).toHaveReturnedWith(1);
  });
});
