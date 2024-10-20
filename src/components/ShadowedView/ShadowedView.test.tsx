import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react-native";

import { theme } from "@/theme/theme";

import { ShadowedView } from "./ShadowedView";

describe("ShadowedView", () => {
  it("should render correctly color when set the color theme", () => {
    render(
      <ShadowedView
        size="primary"
        color="semiDarkNavy"
        testID="ShadowedView"
      />,
    );

    expect(screen.getByTestId("ShadowedView")).toHaveStyle({
      backgroundColor: theme.shadows.semiDarkNavy,
    });
  });

  it("should render size correctly when set the size theme", () => {
    render(
      <ShadowedView
        size="secondary"
        color="semiDarkNavy"
        testID="ShadowedView"
      />,
    );

    expect(screen.getByTestId("ShadowedView")).toHaveStyle({
      paddingBottom: theme.spacing.$1,
    });
  });

  it("should render correctly when set false to isShadowed prop", () => {
    render(
      <ShadowedView
        size="primary"
        color="semiDarkNavy"
        isShadowed={false}
        testID="ShadowedView"
      />,
    );

    expect(screen.getByTestId("ShadowedView")).toHaveStyle({
      paddingBottom: 0,
    });
  });
});
