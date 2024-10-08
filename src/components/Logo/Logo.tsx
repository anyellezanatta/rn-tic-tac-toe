import type { SvgProps } from "react-native-svg";
import Svg, { G, Path } from "react-native-svg";
import { useStyles } from "react-native-unistyles";

export const Logo = (props: SvgProps) => {
  const { theme } = useStyles();

  return (
    <Svg width={72} height={32} viewBox="0 0 72 32" {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          fill={theme.colors.lightBlue}
          d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z"
        />
        <Path
          fill={theme.colors.yellow}
          fillRule="nonzero"
          d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z"
        />
      </G>
    </Svg>
  );
};
