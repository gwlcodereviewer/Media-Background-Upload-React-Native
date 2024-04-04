import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/**
 * Name: BackIcon
 * desc: render svg of show back icon
 */
const BackIcon = props => (
  <Svg width={11} height={19} viewBox="0 0 11 19" fill="none" {...props}>
    <Path
      d="M9.09441 17.2L1.26441 9.7372C1.1806 9.6536 1.1141 9.55428 1.06873 9.44494C1.02335 9.3356 1 9.21838 1 9.1C1 8.98162 1.02335 8.8644 1.06873 8.75506C1.1141 8.64572 1.1806 8.5464 1.26441 8.4628L9.09441 1"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default BackIcon;
