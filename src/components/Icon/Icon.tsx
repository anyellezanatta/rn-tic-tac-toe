import type { FC } from "react";
import type { SvgProps } from "react-native-svg";
import { useStyles } from "react-native-unistyles";

import type { spacing } from "@/theme/spacing";

import { Icons, type IconName } from "./icons";

type IconSize = keyof Pick<typeof spacing, "$4" | "$5" | "$8" | "$10" | "$16">;

export type IconProps = SvgProps & {
  icon: IconName;
  size?: IconSize;
};

export const Icon: FC<IconProps> = (props) => {
  const { icon, size = "$10", ...rest } = props;

  const { theme } = useStyles();

  const IconComponent = Icons[icon];

  const iconSize = theme.spacing[size];

  return (
    <IconComponent
      accessibilityRole="image"
      aria-label={icon}
      accessibilityLabel={icon}
      width={iconSize}
      height={iconSize}
      {...rest}
    />
  );
};
