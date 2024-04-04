import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
/**
 * Name: CheckMark
 * desc: render svg of show check mark icon
 */
const CheckMark = props => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx="12" cy="12" r="12" fill="#34C7AC" />
    <Path
      d="M8 11.9615L10.5385 14.5L16.0385 9"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default CheckMark;
