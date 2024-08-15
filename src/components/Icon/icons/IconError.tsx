import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const IconError = (props: SvgProps) => (
  <Svg width={64} height={64} viewBox="0 0 64 64" fill="none" {...props}>
    <Path
      fill="#E40505"
      fillRule="evenodd"
      d="M46.35 7.604 39.23.637a2.256 2.256 0 0 0-3.141 0L23.5 12.957 10.911.638a2.256 2.256 0 0 0-3.142 0L.651 7.604a2.142 2.142 0 0 0 0 3.075L13.239 23 .651 35.32a2.142 2.142 0 0 0 0 3.076l7.118 6.967c.868.85 2.275.85 3.142 0L23.5 33.043l12.589 12.32c.867.85 2.274.85 3.142 0l7.118-6.967a2.142 2.142 0 0 0 0-3.075L33.761 23l12.588-12.32a2.142 2.142 0 0 0 0-3.076Z"
      clipRule="evenodd"
    />
  </Svg>
);
