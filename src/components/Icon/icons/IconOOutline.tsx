import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
import { useStyles } from "react-native-unistyles";

export const IconOOutline = (props: SvgProps) => {
  const { theme } = useStyles();

  return (
    <Svg width={64} height={64} viewBox="0 0 66 66" {...props}>
      <Path
        fill="none"
        stroke={props.stroke || theme.colors.yellow}
        strokeWidth={2}
        d="M33 1c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C15.327 65 1 50.673 1 33 1 15.327 15.327 1 33 1Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
      />
    </Svg>
  );
};
