import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
/**
 * Name: CheckedIcon
 * desc: render svg of show checked icon
 */
const CheckedIcon = props => (
  <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
    <Circle cx="11" cy="11" r="11" />
    <Path
      d="M7.33398 12.3241L8.75584 14.0759C8.8306 14.1657 8.92433 14.2379 9.03029 14.2872C9.13626 14.3364 9.25182 14.3616 9.36868 14.3609C9.48554 14.3602 9.60079 14.3337 9.70616 14.2831C9.81152 14.2326 9.90438 14.1593 9.97806 14.0686L14.6673 8.25"
      stroke="white"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default CheckedIcon;
