import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react-native";

import { Icon } from "./Icon";

describe("Icon", () => {
  it("should render the icon", () => {
    render(<Icon icon="IconRestart" />);

    expect(screen.getByLabelText("IconRestart")).toBeDefined();
  });
});
