import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/**
 * Name: ArrowOpen
 * desc: render svg of show arrow icon
 */
const ArrowOpen = props => (
  <Svg width={10} height={5} viewBox="0 0 10 5" fill="none" {...props}>
    <Path
      d="M1.8151 0.5C1.35534 0.5 1.13929 1.06826 1.48292 1.3737L4.66782 4.20473C4.85726 4.37312 5.14274 4.37312 5.33218 4.20473L8.51708 1.3737C8.86071 1.06826 8.64466 0.5 8.1849 0.5L1.8151 0.5Z"
      fill="#12193D"
    />
  </Svg>
);
export default ArrowOpen;
