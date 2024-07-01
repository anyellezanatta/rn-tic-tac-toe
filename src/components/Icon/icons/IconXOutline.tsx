import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";
import { useStyles } from "react-native-unistyles";

export const IconXOutline = (props: SvgProps) => {
  const { theme } = useStyles();

  return (
    <Svg width={64} height={64} viewBox="0 0 64 64" {...props}>
      <Path
        fill="none"
        stroke={props.stroke || theme.colors.lightBlue}
        strokeWidth={2}
        d="M51.12 1.269c.511 0 1.023.195 1.414.586l9.611 9.611c.391.391.586.903.586 1.415s-.195 1.023-.586 1.414L44.441 32l17.704 17.705c.391.39.586.902.586 1.414 0 .512-.195 1.024-.586 1.415l-9.611 9.611a1.994 1.994 0 0 1-1.415.586 1.994 1.994 0 0 1-1.414-.586L32 44.441 14.295 62.145a1.99 1.99 0 0 1-1.414.586 1.994 1.994 0 0 1-1.415-.586l-9.611-9.611a1.994 1.994 0 0 1-.586-1.415c0-.512.195-1.023.586-1.414L19.559 32 1.855 14.295a1.994 1.994 0 0 1-.586-1.414c0-.512.195-1.024.586-1.415l9.611-9.611c.391-.391.903-.586 1.415-.586s1.023.195 1.414.586L32 19.559 49.705 1.855a1.99 1.99 0 0 1 1.414-.586Z"
      />
    </Svg>
  );
};
