import React from 'react';
import { StatusBar } from 'react-native';
import colors from '../../../styles/colors';
import { StatusView } from './styled';

/**
 * Props type declaration
 */
interface IProps {
  color?: string;
}
/**
 * Desc: App Status Bar
 * @param props {color} string
 * @returns React component
 */
const AppStatusBar: React.FC<IProps> = (props: IProps) => {
  const { color } = props;
  const bgColor = color || colors.ghostWhite;

  return (
    <StatusView bgColor={bgColor}>
      <StatusBar backgroundColor={bgColor} barStyle="dark-content" />
    </StatusView>
  );
};

export default AppStatusBar;
