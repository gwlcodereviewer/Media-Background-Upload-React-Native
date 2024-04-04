import React from 'react';
import { ActivityIndicator } from 'react-native';
import { defaultTheme } from '../../../styles/theme';
import { LoaderContainer } from './styled';

/**
 * Type / Interface declaration for props
 */
interface Props {
  color?: string;
  bgColor?: string;
  size?: 'small' | 'large';
}
/**
 * desc: Screen loader UI
 * @param props
 * @returns React Component
 */
const ScreenLoader: React.FC<Props> = (props: Props) => {
  const { color, bgColor = 'transparent', size = 'large' } = props;
  const { primaryButtonColor } = defaultTheme;

  return (
    <LoaderContainer color={bgColor}>
      <ActivityIndicator color={color || primaryButtonColor} size={size} />
    </LoaderContainer>
  );
};

export default ScreenLoader;
